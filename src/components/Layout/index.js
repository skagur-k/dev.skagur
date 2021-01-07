import React from "react"
import Footer from "../Footer/"
import Header from "../Header/"
import * as Styled from "./styled"
import { Global } from "@emotion/react"
import GlobalStyles from "../../styles/global"

const Layout = props => {
  return (
    <Styled.LayoutContainer>
      <Global styles={GlobalStyles} />
      <Header />
      <Styled.LayoutContentWrapper>
        {props.children}
      </Styled.LayoutContentWrapper>
      <Footer />
    </Styled.LayoutContainer>
  )
}

export default Layout
