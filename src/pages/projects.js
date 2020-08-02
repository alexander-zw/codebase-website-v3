import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

import CurrentProjects from "../components/current-projects"
import ProjectsHeader from "../components/projects/projects-header"
import PastProjects from "../components/projects/past-projects"

const ProjectsPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Projects" />
      <ProjectsHeader />
      <CurrentProjects />
      <PastProjects />
    </Layout>
  )
}

export default ProjectsPage
