import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import PostList from "../components/PostList"
import Pagination from "../components/Pagination"
import Layout from "../components/Layout"

const BlogList = ({ data, pageContext }) => {
  const posts = data.allMdx.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      {/* <PostList posts={posts} /> */}
      {/* <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      /> */}
    </Layout>
  )
}

export const PostsQuery = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { publish: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
export default BlogList
