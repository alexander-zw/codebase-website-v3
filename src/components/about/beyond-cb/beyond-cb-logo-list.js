import React from "react"

import CompanyLogo from "./beyond-cb-logo"
import "../../../styles/beyond-cb.css"

const CompanyLogoList = ({ companies }) => {
  return (
    <div className="cb-beyond-logo-group">
      {companies.map(element => {
        return (
          <CompanyLogo
            key={element.name}
            name={element.name}
            src={element.src}
            size={element.size}
          />
        )
      })}
    </div>
  )
}

export default CompanyLogoList
