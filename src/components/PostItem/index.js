import React from "react"
import kebabCase from "lodash/kebabCase"
import styled from "styled-components"
import { Link } from "gatsby"

const PostWrapper = styled.li`
  margin: 0rem 0 1rem;
  list-style-type: none;
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

const PostItem = ({ title, date, tags, slug }) => (
  <PostWrapper>
    <Link to={`/blog/${kebabCase(slug)}`}>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{tags}</p>
    </Link>
  </PostWrapper>
)

export default PostItem
