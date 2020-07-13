import React from "react"
import CompanyLogoList from "./beyond-cb-logo-list"
import { Companies } from "../../../constants"
import Container from "react-bootstrap/Container"
import "../../../styles/beyond-cb.css"

class BeyondCodebase extends React.Component {
  render() {
    return (
      <Container className="beyond-container">
        <h2 className="beyond-title">Beyond Codebase</h2>
        <div className="beyond-text-box">
          <p className="beyond-text">Our members and alumni have continued their success through internships and full-time 
          employment across a variety of industries.
          </p>
        </div>
        <CompanyLogoList companies={Companies} />
      </Container>
    )
  }
}

export default BeyondCodebase