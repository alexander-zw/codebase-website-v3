import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../constants"

const IndexPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Home" />
      <h1>Hi</h1>
    </Layout>
  )
}

export default IndexPage
