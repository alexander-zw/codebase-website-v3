import React from "react"
import Container from "react-bootstrap/Container"

import CompanyLogoList from "./beyond-cb-logo-list"
import { Companies } from "../../../constants"
import "../../../styles/beyond-cb.css"

const BeyondCodebase = () => {
  return (
    <div className="cb-wrapper-white">
      <Container>
        <h2 className="cb-section-heading">Beyond Codebase</h2>
        <div className="cb-beyond-section-header">
          <p className="cb-section-text">
            Our members and alumni have continued their success through
            internships and full-time employment across a variety of industries.
          </p>
        </div>
        <CompanyLogoList companies={Companies} />
      </Container>
    </div>
  )
}

export default BeyondCodebase
