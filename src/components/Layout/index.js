import React from "react"
import Footer from "../Footer/"
import Terminal from "../Terminal/"
import * as Styled from "./styled"

const Layout = props => {
  return (
    <Styled.LayoutContainer>
      <Terminal />
      <Styled.LayoutContentWrapper>{props.children}</Styled.LayoutContentWrapper>
    </Styled.LayoutContainer>
  )
}

export default Layout
