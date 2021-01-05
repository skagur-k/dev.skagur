import React from "react"
import styled from "@emotion/styled"
import useSiteMetadata from "../hooks/useSiteMetadata"

const StyledFooter = styled.footer`
  margin-top: 3rem;
`

const Footer = () => {
  const author = useSiteMetadata().author

  return (
    <StyledFooter>
      <p>Created by {author.name}, © 2021</p>
    </StyledFooter>
  )
}

export default Footer
