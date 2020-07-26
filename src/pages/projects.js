import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

import CurrentProjects from "../components/current-projects"
import ProjectsHeader from "../components/projects/projects-header"

const ProjectsPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Projects" />
      <ProjectsHeader />
      <CurrentProjects />
    </Layout>
  )
}

export default ProjectsPage
