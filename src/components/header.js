import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Navbar from "./Nav"

const Container = styled.div`
  padding: 1rem 0 2rem;
`

const Title = styled.h1`
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  color: #111111;
  font-size: 1.5rem;

  & > a {
    color: #1f7a8c;
    text-decoration: none;
  }
`

const Header = () => {
  const { title } = useSiteMetadata()
  return (
    <Container>
      <Title>
        <Link to="/">{title}</Link>
      </Title>
      <Navbar />
    </Container>
  )
}

export default Header
