/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./nav-components/nav-bar"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children, theme }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            external
            action
          }
        }
      }
    }
  `)

  return (
    <div>
      <NavBar menuLinks={data.site.siteMetadata.menuLinks} theme={theme} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
