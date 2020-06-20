import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavLink from "./nav-link"
import blueLogo from "../images/cb-logo-blue.png"
import whiteLogo from "../images/cb-logo-white.png"

const pickLogo = pathname =>
  pathname === "/contact" ? (
    <img src={blueLogo} alt="Logo" />
  ) : (
    <img src={whiteLogo} alt="Logo" />
  )

const Header = ({ menuLinks, pathname }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav>
        <ul style={{ display: "flex", flex: 1 }}>
          {menuLinks.map(link => {
            console.log(link)
            if (link.name === "Home") {
              return (
                <NavLink
                  link={link.link}
                  linkId={link.id + "-link"}
                  children={pickLogo(pathname)}
                />
              )
            } else {
              return (
                <NavLink
                  link={link.link}
                  linkId={link.id + "-link"}
                  children={link.name}
                />
              )
            }
          })}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
