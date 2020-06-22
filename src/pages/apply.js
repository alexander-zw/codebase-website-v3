import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../constants"

const ApplyPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Apply" />
      <h1>Apply</h1>
    </Layout>
  )
}

export default ApplyPage
