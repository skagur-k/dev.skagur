import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author {
              name
              social {
                instagram
                email
                linkedin
                github
              }
            }
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
