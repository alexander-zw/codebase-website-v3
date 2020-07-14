import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import "../../styles/home-testimonials.css"

const HomeTestimonials = () => {
  return (
    <div className="cb-home-testimonials-bg">
      <Container>
        <Row className="cb-home-header-row">
          <Col md={12}>
            <p className="cb-home-header-subtitle">
              Codebase is a UC Berkeley student organization that builds
              software projects for high growth tech companies.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeTestimonials
