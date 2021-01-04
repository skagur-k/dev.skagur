const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog-post.js")
  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
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
    res.data.allMdx.edges.forEach(edge => {
      const slug = edge.node.fields.slug
      createPage({
        component: blogTemplate,
        path: `/blog/${slug}`,
        context: {
          slug: slug,
        },
      })
    })
  }
}
