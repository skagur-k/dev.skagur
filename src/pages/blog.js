import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import blogStyles from "./blog.module.scss"
import useAllPosts from "../hooks/useAllPosts"

const BlogPage = () => {
  const posts = useAllPosts()
  console.log(posts)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {posts.map(edge => {
          const post = edge.node
          const frontmatter = post.frontmatter
          return (
            <li className={blogStyles.post} key={post.fields.slug}>
              <Link to={`/blog${post.fields.slug}`}>
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
