import React from "react"

import "../../styles/home-header.css"
import homeHeaderImage from "../../images/home-header-image.png"

const HomeHeader = () => {
  return (
    <div className="cb-home-header-bg">
      <div className="container">
        <div className="row cb-home-header-row">
          <div className="col-md-4">
            <h1 className="cb-home-header-title">We are a group of mentors.</h1>{" "}
            <p className="cb-home-header-subtitle">
              Codebase is a UC Berkeley student organization that builds
              software projects for high growth tech companies.
            </p>
          </div>
          <div className="col-md-8">
            <img
              src={homeHeaderImage}
              alt="Working together here"
              className="cb-home-header-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
