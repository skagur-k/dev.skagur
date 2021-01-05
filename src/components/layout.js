import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
  max-width: 850px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

const Layout = props => {
  return (
    <Container>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Container>
  )
}

export default Layout
