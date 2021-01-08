import React from "react"
import * as Styled from "./styled"

const TOC = ({ tableOfContents }) => {
  return (
    <Styled.TOC>
      <Styled.InnerScroll>
        <h1>Table of contents</h1>
        {tableOfContents.items.map(i => (
          <li key={i.url}>
            <Styled.TOCLink to={i.url} key={i.url}>
              {i.title}
            </Styled.TOCLink>
          </li>
        ))}
      </Styled.InnerScroll>
    </Styled.TOC>
  )
}
export default TOC
