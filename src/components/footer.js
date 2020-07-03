import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/footer.css"
import fbLogo from "../images/footer/facebook.png"
import instaLogo from "../images/footer/instagram.png"
import medLogo from "../images/footer/medium.png"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      blackLogo: file(relativePath: { eq: "cb-logo-black.png" }) {
        childImageSharp {
          fixed(width: 150, height: 37) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <footer>
      <Container className="text-center text-md-left cb-footer-container">
        <Row>
          <Col md={5} className="mx-auto">
            <div className="cb-footer-logo">
              <Link className="cb-footer-logo-link" to="/">
                <Img
                  fixed={data.blackLogo.childImageSharp.fixed}
                  fadeIn={false}
                  loading="eager"
                />
              </Link>
            </div>
            <div className="mb-3">
              <a
                className="cb-footer-social-link"
                href="https://www.facebook.com/berkeleycodebase/"
                target="_source"
              >
                <img
                  src={fbLogo}
                  width="20"
                  height="20"
                  alt="Facebook"
                  className="cb-footer-social-logo"
                />
                Facebook
              </a>
            </div>
            <div className="mb-3">
              <a
                className="cb-footer-social-link"
                href="https://www.instagram.com/berkeleycodebase/"
                target="_source"
              >
                <img
                  src={instaLogo}
                  width="20"
                  height="20"
                  alt="Instagram"
                  className="cb-footer-social-logo"
                />
                Instagram
              </a>
            </div>
            <div className="mb-3">
              <a
                className="cb-footer-social-link"
                href="https://medium.com/berkeley-codebase"
                target="_source"
              >
                <img
                  src={medLogo}
                  width="20"
                  height="20"
                  alt="Medium"
                  className="cb-footer-social-logo"
                />
                Medium
              </a>
            </div>
          </Col>
          <Col md={7} className="mx-auto">
            <Row>
              <Col md={4} className="mx-auto">
                <div className="cb-footer-title mt-3 mb-4">General</div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/about">
                    About
                  </Link>
                </div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/about">
                    Team
                  </Link>
                </div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/projects">
                    Projects
                  </Link>
                </div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/contact">
                    Contact Us
                  </Link>
                </div>
                <div className="cb-footer-link-container mt-3 mb-3">
                  <a
                    className="cb-footer-link"
                    href="https://medium.com/berkeley-codebase"
                    target="_source"
                  >
                    Blog
                  </a>
                </div>
              </Col>
              <Col md={4} className="mx-auto">
                <div className="cb-footer-title mt-3 mb-4">Students</div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/apply">
                    Apply
                  </Link>
                </div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/projects">
                    Process
                  </Link>
                </div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/contact">
                    FAQ
                  </Link>
                </div>
              </Col>
              <Col md={4} className="mx-auto">
                <div className="cb-footer-title mt-3 mb-4">Companies</div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/projects">
                    Projects
                  </Link>
                </div>
                <div className="mt-3 mb-3">
                  <Link className="cb-footer-link" to="/contact">
                    Contact Us
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="cb-footer-ocf-row justify-content-center justify-content-md-end">
          <a className="cb-footer-ocf-link" href="https://www.ocf.berkeley.edu">
            <a href="https://www.ocf.berkeley.edu">
              <img
                src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
                alt="Hosted by the OCF"
                width="85"
                height="34"
              />
            </a>
          </a>
        </Row>
        <Row className="justify-content-center">
          <p className="cb-footer-disclaimer">
            We are a student group acting independently of the University of
            California. We take full responsibility for our organization and
            this web site.
          </p>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
