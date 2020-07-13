import React from "react"
import CompanyLogoList from "./beyond-cb-logo-list"
import { Companies } from "../../../constants"
import "../../../styles/beyond-cb.css"

class BeyondCodebase extends React.Component {
  render() {
    return (
      <div className="container beyond-container">
        <h2 className="beyond-title">Beyond Codebase</h2>
        <div className="beyond-text-box">
          <p className="beyond-text">Our members and alumni have continued their success through internships and full-time 
          employment across a variety of industries.
          </p>
        </div>
        <CompanyLogoList companies={Companies} />
      </div>
    )
  }
}

export default BeyondCodebase