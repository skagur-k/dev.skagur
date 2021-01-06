import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import useAllPosts from "../hooks/useAllPosts"
import styled from "@emotion/styled"
import kebabCase from "lodash/kebabCase"
import SEO from "../components/SEO"

const PostsContainer = styled.ol`
  list-style-type: none;
  margin: 0;
`
const PostWrapper = styled.li`
  margin: 1rem 0;
  & > a {
    background: #f4f4f4;
    color: #000000;
    display: block;
    padding: 1rem;
    text-decoration: none;
    &:hover {
      background: #e4e4e4;
    }
  }
  & > a h2 {
    margin-bottom: 0;
  }

  & > p {
    color: #777777;
    font-size: 0.8rem;
    font-style: italic;
  }
`

const BlogPage = () => {
  const posts = useAllPosts()
  console.log(posts)

  return (
    <Layout>
      <SEO title="Blog" description="" />
      <h1>Blog</h1>
      <PostsContainer>
        {posts.map(edge => {
          const post = edge.node
          const frontmatter = post.frontmatter
          return (
            <PostWrapper key={post.fields.slug}>
              <Link to={`/blog/${kebabCase(post.fields.slug)}`}>
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.date}</p>
              </Link>
            </PostWrapper>
          )
        })}
      </PostsContainer>
    </Layout>
  )
}

export default BlogPage
