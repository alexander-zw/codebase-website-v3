import React, { useState } from "react"
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import "../../styles/mission-stats.css"
import { Link } from "gatsby"

const MissionStats = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);
  const onVisibilityChange = isVisible => {
      if (isVisible) {
        setDidViewCountUp(true);
      }
    }
  return (
    <div className="cb-mission-stats-bg">
      <div className="container">
        <div className="cb-mission-stats-m">
          <div className="row cb-mission-stats-mission-row">
          <div className="col-md-12">
            <h1 className="cb-mission-stats-title">
              OUR MISSION
            </h1>
            <div className="cb-mission-stats-mission">
              <p className="cb-mission-stats-description">
                We are a software development club that strives to
                build a community where passionate and driven engineers
                can grow together through meaningful industry initiatives.
              </p>
            </div>
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
        <div className="cb-mission-stats-stats">
          <div className="row cb-mission-stats-stats-row">
            <div className="col cb-mission-stats-stat">
              <div className="cb-mission-stats-number">
                <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                  <CountUp start={0} end={didViewCountUp ? 5 : 0} duration={2.75} />
                </VisibilitySensor>
              </div>
              <div className="cb-mission-stats-text">projects every semester</div>
              </div>
              <div className="col cb-mission-stats-stat">
                <div className="cb-mission-stats-number">
                  <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                    <CountUp start={0} end={didViewCountUp ? 12 : 0} duration={2.75} />
                  </VisibilitySensor>
                </div>
                <div className="cb-mission-stats-text">weeks of agile development</div>
              </div>
              <div className="col cb-mission-stats-stat">
                <div className="cb-mission-stats-number">
                  <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                    <CountUp start={0} end={didViewCountUp ? 25 : 0} duration={2.75} />
                  </VisibilitySensor>
                </div>
                <div className="cb-mission-stats-text">completed projects and counting</div>
              </div>
              <div className="col cb-mission-stats-stat">
                <div className="cb-mission-stats-number">
                  <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                    <CountUp start={0} end={didViewCountUp ? 46 : 0} duration={2.75} />
                  </VisibilitySensor>
                </div>
                <div className="cb-mission-stats-text">active members and over 100 alumni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionStats
