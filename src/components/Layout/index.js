import React from "react"
import Footer from "../Footer/"
import Header from "../Header/"
import * as Styled from "./styled"
import { GlobalStyle } from "../../styles/global-style"

const Layout = props => {
  return (
    <Styled.LayoutContainer>
      <GlobalStyle />
      <Header />
      <Styled.LayoutContentWrapper>
        {props.children}
      </Styled.LayoutContentWrapper>
      <Footer />
    </Styled.LayoutContainer>
  )
}

export default Layout
