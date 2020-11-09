import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import { Theme } from "../constants"
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
      <Navbar
        className={`cb-nav-bar-navbar ${getBackgroundClass(theme)}`}
        expand="lg"
      >
        <Container>
          <Navbar.Brand className="cb-nav-bar-navbar-brand">
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
          <Navbar.Toggle aria-controls="cb-nav-bar-navbar-nav" />
          <Navbar.Collapse id="cb-nav-bar-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <Nav.Item className="cb-nav-bar-item">
                <Link
                  className={`nav-link cb-nav-bar-nav-link ${getLinkClass(
                    theme
                  )}`}
                  activeClassName={getActiveLinkClass(theme)}
                  to="/about"
                >
                  About
                </Link>
              </Nav.Item>
              <Nav.Item className="cb-nav-bar-item">
                <Link
                  className={`nav-link cb-nav-bar-nav-link ${getLinkClass(
                    theme
                  )}`}
                  activeClassName={getActiveLinkClass(theme)}
                  to="/projects"
                >
                  Projects
                </Link>
              </Nav.Item>
              <Nav.Item className="cb-nav-bar-item">
                <a
                  className={`nav-link cb-nav-bar-nav-link ${getLinkClass(
                    theme
                  )}`}
                  href="https://medium.com/berkeley-codebase"
                >
                  Blog
                </a>
              </Nav.Item>
              <Nav.Item className="cb-nav-bar-item">
                <a
                  className={`nav-link cb-nav-bar-nav-link ${getLinkClass(
                    theme
                  )}`}
                  href="https://www.notion.so/berkeleycodebase/Codebase-Public-4fa3c7bcd749416392624391e91c279e"
                >
                  Resources
                </a>
              </Nav.Item>
              <Nav.Item className="cb-nav-bar-item">
                <Link
                  className={`nav-link cb-nav-bar-nav-link ${getLinkClass(
                    theme
                  )}`}
                  activeClassName={getActiveLinkClass(theme)}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item className="cb-nav-bar-item">
                <Link
                  className={`nav-link cb-nav-bar-nav-link ${getLinkClass(
                    theme,
                    true
                  )}`}
                  to="/apply"
                >
                  Apply →
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
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
  return theme === Theme.LIGHT ? "cb-nav-bar-bg-light" : "cb-nav-bar-bg-default"
}

const getLinkClass = (theme, action = false) => {
  if (action) {
    return theme === Theme.LIGHT
      ? "cb-nav-bar-link-light cb-nav-bar-action-link-light"
      : "cb-nav-bar-link-default cb-nav-bar-action-link-default"
  } else {
    return theme === Theme.LIGHT
      ? "cb-nav-bar-link-light cb-nav-bar-hover-link-light"
      : "cb-nav-bar-link-default cb-nav-bar-hover-link-default"
  }
}

const getActiveLinkClass = theme => {
  return theme === Theme.LIGHT
    ? "cb-nav-bar-active-link-light"
    : "cb-nav-bar-active-link-default"
}

export default NavBar
