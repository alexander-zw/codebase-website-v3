import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = ({ location }) => {
  console.log(location)
  return (
    <Layout pathname={location.pathname}>
      <SEO title="About" />
      <h1>Projects</h1>
    </Layout>
  )
}

export default Projects
