import React from "react"
import Container from "react-bootstrap/Container"

import "../../styles/about-header.css"

const AboutHeader = () => {
  return (
    <div className="cb-about-header-bg">
      <Container>
        <h1 className="cb-about-header-title">OUR MISSION</h1>
        <h1 className="cb-about-header-subtitle">
          We are a community of developers that empowers students to break into
          the software industry.
        </h1>
        <a
          className="cb-about-header-button"
          href="https://medium.com/berkeley-codebase"
        >
          Read more on our blog →
        </a>
      </Container>
    </div>
  )
}

export default AboutHeader
