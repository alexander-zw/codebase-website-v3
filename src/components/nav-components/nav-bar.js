import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import NavLink from "./nav-link"
import Theme from "../../constants"
import blueLogo from "../../images/cb-logo-blue.png"
import whiteLogo from "../../images/cb-logo-white.png"
import "../../styles/nav-components.css"

const NavBar = ({ menuLinks, theme }) => {
  return (
    <header>
      <div className={`nav-container ${getBackground(theme)}`}>
        <nav>
          <ul className="link-ul">
            <Link to="/">{getLogo(theme)}</Link>
            {menuLinks.map(link => {
              return (
                <NavLink key={link.name} link={link} theme={theme}>
                  {link.name}
                </NavLink>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

NavBar.propTypes = {
  theme: PropTypes.number,
}

NavBar.defaultProps = {
  theme: Theme.DEFAULT,
}

const getLogo = theme => {
  const logo = theme === Theme.LIGHT ? blueLogo : whiteLogo
  return <img src={logo} alt="Logo" className="nav-logo" />
}

const getBackground = theme => {
  return theme === Theme.LIGHT ? "bg-light" : "bg-default"
}

export default NavBar
