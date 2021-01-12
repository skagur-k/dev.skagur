const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const _ = require("lodash")

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value,
    })
  }
}

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blogPost.js")
  const blogListTemplate = path.resolve("./src/templates/blogList.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")

  const result = await graphql(`
    query {
      postsMdx: allMdx(
        filter: { frontmatter: { publish: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              tags
            }
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      siteMetadata: site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`)
    return
  }

  const posts = result.data.postsMdx.edges

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      //Previous, Next are opposite since it is in DESC order.
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      const slug = post.node.fields.slug
      createPage({
        component: blogPostTemplate,
        path: `/blog/${_.kebabCase(slug)}`,
        context: {
          slug: slug,
          previous,
          next,
        },
      })
    })
  }

  const postsPerPage = result.data.siteMetadata.siteMetadata.postsPerPage
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/" : `page/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `blog/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
