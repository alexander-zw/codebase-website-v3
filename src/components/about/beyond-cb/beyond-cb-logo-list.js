import React from "react"
import CompanyLogo from "./beyond-cb-logo"
import "../../../styles/beyond-cb.css"

const CompanyLogoList = ({ companies }) => {
  return (
      <div className="logo-group">
        {companies.map(element => {
          return (
            <CompanyLogo
			        key={element.name}
              name={element.name}
              src={element.src}
            ></CompanyLogo>
          )
        })}
      </div>
  )
}

export default CompanyLogoList