import React from "react"
import TextLoop from "react-text-loop"

import "../../styles/home-header.css"
import homeHeaderImage from "../../images/home-header-animation.gif"
import { Link } from "gatsby"

const HomeHeader = () => {
  return (
    <div className="cb-home-header-bg">
      <div className="container">
        <div className="row cb-home-header-row">
          <div className="col-md-4">
            <h1 className="cb-home-header-title">
              We are a community of{" "}
              <TextLoop
                children={["students", "coders", "mentors", "friends"]}
                springConfig={{ stiffness: 180, damping: 15 }}
                interval={[3000, 3000, 3000, 3900]}
                adjustingSpeed={200}
              />
              .
            </h1>{" "}
            <p className="cb-home-header-subtitle">
              Codebase is a UC Berkeley student organization that builds
              software projects for high growth tech companies.
            </p>
            <div className="cb-home-header-button-row">
              <Link
                className="cb-home-header-button cb-home-header-apply"
                to="/apply"
              >
                Apply
              </Link>
              <Link
                className="cb-home-header-button cb-home-header-about"
                to="/about"
              >
                Learn More
              </Link>
            </div>
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
