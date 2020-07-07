import React from "react"
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

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
            <div className="cb-mission">
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
        <div className="cb-stats">
          <div className="row cb-stats-row">
            <div className="col cb-stat">
              <div className="cb-mission-stats-number">
                <CountUp end={5} duration={2.75} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
                  </CountUp>
              </div>
              <div className="cb-mission-stats-text">projects every semester</div>
              </div>
              <div className="col cb-stat">
                <div className="cb-mission-stats-number">
                  <CountUp end={12} duration={2.75} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </div>
                <div className="cb-mission-stats-text">weeks of agile development</div>
              </div>
              <div className="col cb-stat">
                <div className="cb-mission-stats-number">
                  <CountUp end={25} duration={2.75} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                </div>
                <div className="cb-mission-stats-text">completed projects and counting</div>
              </div>
              <div className="col cb-stat">
                <div className="cb-mission-stats-number">
                  <CountUp end={46} duration={2.75} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
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
