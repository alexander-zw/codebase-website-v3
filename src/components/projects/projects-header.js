import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import { Parallax } from "react-parallax"

import img from "../../images/projects-header-img.jpg"
import "../../styles/projects-header.css"

const ProjectsHeader = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

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
            Join our team →
          </Link>
        </Container>
      </div>
      <Parallax bgImage={img} strength={200}>
        <div style={{ height: Math.max(500, width / 3.5) }} />
      </Parallax>
    </div>
  )
}

export default ProjectsHeader
