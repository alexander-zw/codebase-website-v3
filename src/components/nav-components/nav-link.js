import React from "react"
import { Link } from "gatsby"

import Theme from "../../constants"
import "../../styles/nav-components.css"

const NavLink = ({ link, theme, children }) => {
  return (
    <li className="link-li">
      {link.external ? (
        <a className="link" key={link.name} href={link.link} target="_source">
          {link.name}
        </a>
      ) : (
        <Link
          className={`link ${getLinkClass(link, theme)}`}
          to={link.link}
          activeClassName="active-link"
        >
          {children}
        </Link>
      )}
    </li>
  )
}

const getLinkClass = (link, theme) => {
  if (link.action) {
    return theme === Theme.LIGHT ? "action-link-light" : "action-link-default"
  }
  return ""
}

export default NavLink
