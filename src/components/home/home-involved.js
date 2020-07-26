import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../../styles/home-involved.css"

const HomeInvolved = () => {
  return (
    <div className="cb-wrapper-white">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="cb-home-involved-section-header">
              <h1 className="cb-home-involved-title">Want to get involved?</h1>
              <p className="cb-section-text">
                Reach out to us through email or social media! You can also
                connect with us through our contact forms.
              </p>
            </div>
            <div className="cb-home-involved-button-row">
              <Link
                className="cb-home-involved-button cb-home-involved-button-dark"
                to="/apply"
              >
                Apply →
              </Link>
              <Link
                className="cb-home-involved-button cb-home-involved-button-light"
                to="/about"
              >
                Learn More →
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <h1 className="cb-home-involved-heading">For Companies and NPOs</h1>
            <p className="cb-section-text">
              We are looking for companies and non-profits with exciting
              projects to work with. If you have a project for us, please reach
              out!
            </p>
            <Link className="cb-link-blue" to="/contact">
              Contact Us →
            </Link>
          </Col>
          <Col lg={3} md={6} sm={6} className="cb-home-involved-col">
            <h1 className="cb-home-involved-heading">For Students</h1>
            <p className="cb-section-text">
              We are looking for students who have a hunger for learning and a
              passion for tech. Interested? Join our team!
            </p>
            <Link className="cb-link-blue" to="/contact">
              Contact Us →
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeInvolved
