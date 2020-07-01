import React from "react"

import "../../styles/mission-stats.css"
import { Link } from "gatsby"

const MissionStats = () => {
  return (
    <div className="cb-mission-stats-bg">
      <div className="container">
        <div className="cb-mission-stats-m">
          <div className="row cb-mission-row">
          <div className="col-md-12">
            <h1 className="cb-mission-stats-title">
              OUR MISSION
            </h1>
            <p className="cb-mission-stats-description">
              We are a software development club that strives to
              build a community where passionate and driven engineers
              can grow together through meaningful industry initiatives.
            </p>
            <div className="cb-mission-stats-end">
              <Link
                className="cb-mission-stats-more"
                to="/about"
              >
                Read more →
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="cb-mission-stats-s">
          <div className="row cb-stats-row">
            <div className="col cb-stat">
              <div className="cb-mission-stats-number">5&#13;&#10;</div>
              <div className="cb-mission-stats-text">projects every semester</div>
            </div>
            <div className="col cb-stat">
              <div className="cb-mission-stats-number">12&#13;&#10;</div>
              <div className="cb-mission-stats-text">weeks of agile development</div>
            </div>
            <div className="col cb-stat">
              <div className="cb-mission-stats-number">25&#13;&#10;</div>
              <div className="cb-mission-stats-text">completed projects and counting</div>
            </div>
            <div className="col cb-stat">
              <div className="cb-mission-stats-number">46&#13;&#10;</div>
              <div className="cb-mission-stats-text">active members and over 100 alumni</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionStats
