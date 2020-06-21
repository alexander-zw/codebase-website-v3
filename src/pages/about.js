import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../constants"

const AboutPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="About" />
      <h1>About</h1>
    </Layout>
  )
}

export default AboutPage
