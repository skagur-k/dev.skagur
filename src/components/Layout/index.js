import React from "react"
import Footer from "../Footer/"
import Header from "../Header/"
import * as Styled from "./styled"

const Layout = props => {
  return (
    <>
      <Styled.LayoutContainer>
        <Header />
        <Styled.LayoutContentWrapper>{props.children}</Styled.LayoutContentWrapper>
        <Footer />
      </Styled.LayoutContainer>
    </>
  )
}

export default Layout
