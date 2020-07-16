import React from "react"
import TextLoop from "react-text-loop"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import "../../styles/home-header.css"
import homeHeaderImage from "../../images/home-header-animation.gif"
import { Link } from "gatsby"

const HomeHeader = () => {
  return (
    <div className="cb-home-header-bg">
      <Container>
        <Row className="cb-home-header-row">
          <Col md={4}>
            <h1 className="cb-home-header-title">
              We are a community of{" "}
              <TextLoop
                children={["students", "coders", "mentors", "friends"]}
                springConfig={{ stiffness: 180, damping: 15 }}
                interval={[3000, 3000, 3000, 3900]}
                adjustingSpeed={200}
              />
              .
            </h1>
            <p className="cb-home-header-subtitle">
              Codebase is a UC Berkeley student organization that builds
              software projects for high growth tech companies.
            </p>
            <div className="cb-home-header-button-row">
              <Link
                className="cb-home-header-button cb-home-header-apply"
                to="/apply"
              >
                Apply
              </Link>
              <Link
                className="cb-home-header-button cb-home-header-about"
                to="/about"
              >
                Learn More
              </Link>
            </div>
          </Col>
          <Col md={8}>
            <img
              src={homeHeaderImage}
              alt="Working together here"
              className="cb-home-header-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeHeader
