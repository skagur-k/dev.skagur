import React from "react"
import useSiteMetadata from "../../hooks/useSiteMetadata"
import * as Styled from "./styled"
import { Link } from "gatsby"

import Navbar from "../Nav"

const Header = () => {
  const { title } = useSiteMetadata()
  return (
    <Styled.HeaderContainer>
      <Navbar />
      <Styled.HeaderTitle>
        <Link to="/">{title}</Link>
      </Styled.HeaderTitle>
    </Styled.HeaderContainer>
  )
}

export default Header
