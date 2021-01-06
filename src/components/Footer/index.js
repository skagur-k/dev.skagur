import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import * as Styled from "./styled"

const Footer = () => {
  const author = useSiteMetadata().author

  return (
    <Styled.FooterWrapper>
      <p>Created by {author.name}, © 2021</p>
    </Styled.FooterWrapper>
  )
}

export default Footer
