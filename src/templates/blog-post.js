import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

const BlogPost = props => {
  const post = props.data.mdx
  return (
    <Layout>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <p>{props.data.mdx.frontmatter.date}</p>
      <div>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default BlogPost
