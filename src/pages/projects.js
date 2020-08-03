import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme, Background } from "../constants"

import CurrentProjects from "../components/current-projects"
import ProjectsHeader from "../components/projects/projects-header"
import PastProjects from "../components/projects/past-projects"
import DevelopmentTimeline from "../components/projects/development-timeline"
import TeamDescriptions from "../components/projects/team-descriptions"

const ProjectsPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Projects" />
      <ProjectsHeader />
      <TeamDescriptions />
      <CurrentProjects bg={Background.WHITE} />
      <DevelopmentTimeline />
      <PastProjects />
    </Layout>
  )
}

export default ProjectsPage
