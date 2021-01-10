import React from "react"
import Footer from "../Footer/"
import Header from "../Header/"
import * as Styled from "./styled"
import theme from "../../styles/theme"
import GlobalStyles from "../../styles/global-styles"
import { ThemeProvider } from "styled-components"

const Layout = props => {
  return (
    <Styled.LayoutContainer>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Styled.LayoutContentWrapper>{props.children}</Styled.LayoutContentWrapper>
        <Footer />
      </ThemeProvider>
    </Styled.LayoutContainer>
  )
}

export default Layout
