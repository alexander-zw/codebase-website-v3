import React from "react"
import { Link } from "gatsby"
import ProjectsSection from "../project-panel/projects-section"
import Container from "react-bootstrap/Container"

import "../../styles/home-projects.css"
import "../../styles/layout.css"

const HomeProjects = () => {
  return (
    <div className="cb-home-projects-container">
      <Container className="cb-home-projects">
        <h1 className="cb-home-projects-title">THIS SEMESTER'S PROJECTS</h1>

        <ProjectsSection
          heading="Client Projects"
          description={
            "Our client teams work with industry partners to build products " +
            "ranging from full stack web development to machine learning."
          }
          client={true}
        />

        <Link className="cb-blue-link" to="projects">
          Read more about the client experience →
        </Link>

        <ProjectsSection
          heading="Mentored Project"
          description={
            "Our mentored team focuses on learning the essentials of " +
            "software development and simultaneously develops an full-stack " +
            "web application for a non-profit organization."
          }
          client={false}
        />

        <a
          className="cb-blue-link"
          href="https://medium.com/berkeley-codebase/the-mentored-project-72db8aabb70e"
          target="_source"
        >
          Read more about the mentored experience →
        </a>
      </Container>
    </div>
  )
}

export default HomeProjects
