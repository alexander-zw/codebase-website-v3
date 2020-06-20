import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Apply = ({ location }) => {
  console.log(location)
  return (
    <Layout pathname={location.pathName}>
      <SEO title="About" />
      <h1>Apply</h1>
    </Layout>
  )
}

export default Apply
