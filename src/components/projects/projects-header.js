import React from "react"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"
import { Parallax } from "react-parallax"

import "../../styles/projects-header.css"

import img from "../../images/projects-header-img.jpg"

const ProjectsHeader = () => {
  return (
    <div>
      <div className="cb-projects-header-bg">
        <Container>
          <h1 className="cb-projects-header-title">PROJECTS</h1>
          <h1 className="cb-projects-header-subtitle">
            Whether you are new to coding or are looking to improve your skills,
            we have opportunities for you!
          </h1>
          <Link className="cb-projects-header-button" to="/apply">
            Apply →
          </Link>
        </Container>
      </div>
      <Parallax bgImage={img} strength={200}>
        <div style={{ height: 500 }} />
      </Parallax>
    </div>
  )
}

export default ProjectsHeader
