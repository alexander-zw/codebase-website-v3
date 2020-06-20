import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = ({ location }) => {
  console.log(location)
  return (
    <Layout curPath={location.pathname}>
      <SEO title="About" />
      <h1>About</h1>
    </Layout>
  )
}

export default About
