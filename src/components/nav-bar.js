import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Theme from "../constants"

import { Navbar, Nav } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/nav-bar.css"

const NavBar = ({ theme }) => {
  const data = useStaticQuery(graphql`
    query {
      blueLogo: file(relativePath: { eq: "cb-logo-blue.png" }) {
        childImageSharp {
          fixed(width: 150, height: 37) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      whiteLogo: file(relativePath: { eq: "cb-logo-white.png" }) {
        childImageSharp {
          fixed(width: 150, height: 37) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <Navbar className={`cb-navbar ${getBackgroundClass(theme)}`} expand="lg">
        <div className="container">
          <Navbar.Brand>
            <Link to="/">
              {theme === Theme.LIGHT ? (
                <Img
                  fixed={data.blueLogo.childImageSharp.fixed}
                  fadeIn={false}
                  loading="eager"
                />
              ) : (
                <Img
                  fixed={data.whiteLogo.childImageSharp.fixed}
                  fadeIn={false}
                  loading="eager"
                />
              )}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="cb-navbar-nav" />
          <Navbar.Collapse id="cb-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <Nav.Item className="cb-item">
                <Link className={`nav-link ${getLinkClass(theme)}`} to="/about">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item className="cb-item">
                <Link
                  className={`nav-link ${getLinkClass(theme)}`}
                  to="/projects"
                >
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item className="cb-item">
                <Nav.Link
                  href="https://medium.com/berkeley-codebase"
                  target="_source"
                >
                  <span className={`${getLinkClass(theme)}`}>Blog</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="cb-item">
                <Link
                  className={`nav-link ${getLinkClass(theme)}`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item className="cb-item">
                <Link
                  className={`nav-link ${getLinkClass(theme, true)}`}
                  to="/apply"
                >
                  Apply
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}

NavBar.propTypes = {
  theme: PropTypes.number,
}

NavBar.defaultProps = {
  theme: Theme.DEFAULT,
}

const getBackgroundClass = theme => {
  return theme === Theme.LIGHT ? "cb-bg-light" : "cb-bg-default"
}

const getLinkClass = (theme, action = false) => {
  if (action) {
    return theme === Theme.LIGHT
      ? "cb-link-light cb-action-link-light"
      : "cb-link-default cb-action-link-default"
  } else {
    return theme === Theme.LIGHT ? "cb-link-light" : "cb-link-default"
  }
}

export default NavBar
