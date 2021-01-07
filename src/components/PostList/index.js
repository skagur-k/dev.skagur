import React from "react"
import PostItem from "../PostItem"
import withSizes from "react-sizes"
import * as Styled from "./styled"

const PostList = ({ posts, columns }) => {
  const postGrid = Array.from({ length: columns }).map(() => [])
  posts.forEach((post, index) => {
    postGrid[index % columns].push({
      title: post.node.frontmatter.title,
      date: post.node.frontmatter.date,
      tags: post.node.frontmatter.tags,
      slug: post.node.fields.slug,
    })
  })

  return (
    <Styled.PostListWrapper>
      {postGrid.map((postColumn, i) => (
        <Styled.PostListColumn key={i}>
          {postColumn.map((postItem, i) => (
            <PostItem
              key={i}
              title={postItem.title}
              date={postItem.date}
              tags={postItem.tags}
              slug={postItem.slug}
            />
          ))}
        </Styled.PostListColumn>
      ))}
    </Styled.PostListWrapper>
  )
}

const columnsCount = ({ width }) => {
  let columns = 3
  if (width <= parseInt()) columns = 2
  if (width <= parseInt()) columns = 1

  return columns
}

const mapSizesToProps = sizes => ({
  columns: columnsCount(sizes),
})

export default withSizes(mapSizesToProps)(PostList)
