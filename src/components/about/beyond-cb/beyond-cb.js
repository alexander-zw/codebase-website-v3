import React from "react"
import CompanyLogoList from "./beyond-cb-logo-list"
import { Companies } from "../../../constants"
import Container from "react-bootstrap/Container"
import "../../../styles/beyond-cb.css"

const BeyondCodebase = () => {
  return (
    <Container className="cb-beyond-container">
      <h2 className="cb-beyond-title">Beyond Codebase</h2>
      <div className="cb-beyond-text-box">
        <p className="cb-beyond-text">
          Our members and alumni have continued their success through
          internships and full-time employment across a variety of industries.
        </p>
      </div>
      <CompanyLogoList companies={Companies} />
    </Container>
  )
}

export default BeyondCodebase
