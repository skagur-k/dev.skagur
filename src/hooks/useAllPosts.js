import { graphql, useStaticQuery } from "gatsby"

const useAllPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query ALL_POSTS_QUERY {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return allMdx.edges
}

export default useAllPosts
