import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavLink = ({ link, linkId, children }) => (
  <li
    key={link.name}
    style={{
      listStyleType: `none`,
      padding: `1rem`,
    }}
  >
    <Link
      id={linkId}
      to={link}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {children}
    </Link>
  </li>
)

export default NavLink
