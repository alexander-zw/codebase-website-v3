import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"
import HomeProjects from "../components/home/home-projects"
import ProjectsHeader from "../components/projects/projects-header"

const ProjectsPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Projects" />
      <ProjectsHeader />
      <HomeProjects />
    </Layout>
  )
}

export default ProjectsPage
