import React from "react"
import { Link } from "gatsby"
import ProjectsSection from "../project-panel/projects-section"
import Container from "react-bootstrap/Container"

import "../../styles/home-projects.css"
import "../../styles/layout.css"

const HomeProjects = () => {
  return (
    <Container className="cb-home-projects">
      <h1 className="cb-home-projects-title">THIS SEMESTER'S PROJECTS</h1>

      <ProjectsSection
        heading="Client projects"
        description={
          "Our client teams work with industry partners to build products " +
          "ranging from full stack web development to machine learning."
        }
        client={true}
      />

      <ProjectsSection
        heading="Mentored project"
        description={
          "Our mentored team focuses on learning the essentials of " +
          "software development and simultaneously develops an full-stack " +
          "web application for a non-profit organization."
        }
        client={false}
      />

      <Link className="cb-orange-link" to="projects">
        Check out how each project works →
      </Link>
    </Container>
  )
}

export default HomeProjects
