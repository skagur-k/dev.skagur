import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
import TOC from "../components/TOC"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(truncate: true)
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
    }
  }
`
//blog content | toc
const BlogPost = props => {
  const post = props.data.mdx
  const { frontmatter, body, tableOfContents } = post
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      {/* <TOC tableOfContents={tableOfContents} /> */}
      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default BlogPost
