import React from "react"
import Footer from "../Footer/"
import Header from "../Header/"
import * as Styled from "./styled"
import theme from "../../styles/theme"
import { GlobalStyle } from "../../styles/global-style"
import { ThemeProvider } from "styled-components"

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.LayoutContainer>
        <Header />
        <Styled.LayoutContentWrapper>{props.children}</Styled.LayoutContentWrapper>
        <Footer />
      </Styled.LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout
