import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ location }) => {
  console.log(location)
  return (
    <Layout pathname={location.pathname}>
      <SEO title="About" />
      <h1>Contact</h1>
    </Layout>
  )
}

export default Contact
