import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"
import HomeProjects from "../components/home/home-projects"

const ProjectsPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <HomeProjects />
    </Layout>
  )
}

export default ProjectsPage
