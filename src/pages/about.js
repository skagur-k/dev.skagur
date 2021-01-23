import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import { BaseContent } from "../styles/base"

const AboutPage = () => {
  return (
    <BaseContent>
      <Layout>
        <SEO title="About" description="" />
        <h1>About</h1>
        <p>This is a About page</p>
      </Layout>
    </BaseContent>
  )
}

export default AboutPage
