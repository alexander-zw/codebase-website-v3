import React from "react"
import Container from "react-bootstrap/Container"

import "../../styles/about-header.css"

const AboutHeader = () => {
  return (
    <div className="cb-about-header-bg">
      <Container>
        <h1 className="cb-about-header-title">OUR MISSION</h1>
        <h1 className="cb-about-header-subtitle">
          We strive to build a community where passionate and driven engineers
          can grow together through meaningful industry initiatives.
        </h1>
        <a
          className="cb-about-header-button"
          href="https://medium.com/berkeley-codebase"
          target="_source"
        >
          Read more on our blog →
        </a>
      </Container>
    </div>
  )
}

export default AboutHeader
