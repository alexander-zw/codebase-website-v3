import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import NavLink from "./nav-link"
import Theme from "../../constants"
import blueLogo from "../../images/cb-logo-blue.png"
import whiteLogo from "../../images/cb-logo-white.png"
import "../../styles/nav-components.css"

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.getLogo = this.getLogo.bind(this)
  }

  getLogo(theme) {
    let logo
    switch (theme) {
      case Theme.LIGHT:
        logo = blueLogo
        break
      default:
        logo = whiteLogo
        break
    }
    return <img src={logo} alt="Logo" className="nav-logo" />
  }

  render() {
    return (
      <header>
        <div
          className={`nav-container ${
            this.props.theme === Theme.LIGHT ? "bg-light" : "bg-default"
          }`}
        >
          <nav>
            <ul className="link-ul">
              <Link to="/">{this.getLogo(this.props.theme)}</Link>
              {this.props.menuLinks.map(link => {
                return (
                  <NavLink key={link.name} link={link} theme={this.props.theme}>
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
}

NavBar.propTypes = {
  theme: PropTypes.number,
}

NavBar.defaultProps = {
  theme: Theme.DEFAULT,
}

export default NavBar
