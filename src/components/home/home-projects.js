import React from "react"
import { Link } from "gatsby"
import ProjectsSection from "../projects-section"
import { CLIENT_DESCRIPTION, MENTORED_DESCRIPTION } from "../../constants"

import "../../styles/home-projects.css"

const HomeProjects = () => {
  return (
    <div className="container cb-home-projects">
      <h1 className="cb-home-projects-title">THIS SEMESTER'S PROJECTS</h1>

      <ProjectsSection
        heading="Client projects"
        description={CLIENT_DESCRIPTION}
        client={true}
      />

      <ProjectsSection
        heading="Mentored project"
        description={MENTORED_DESCRIPTION}
        client={false}
      />

      <Link className="cb-orange-link" to="projects">
        Check out how each project works →
      </Link>
    </div>
  )
}

export default HomeProjects
