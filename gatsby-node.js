const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

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

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const res = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    throw res.error
  }

  const posts = res.data.allMdx.edges
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      //Previous, Next are opposite since it is in DESC order.
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      const slug = post.node.fields.slug
      createPage({
        component: blogPostTemplate,
        path: `/blog${slug}`,
        context: {
          slug: slug,
          previous,
          next,
        },
      })
    })
  }
  return null
}
