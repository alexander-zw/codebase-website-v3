import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
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
    <div>
      <div className="cb-mission-stats-bg">
        <Container>
          <div className="cb-mission-stats-m">
            <Row className="cb-mission-stats-mission-row">
              <Col md={12}>
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
              </Col>
            </Row>
          </div>
          <div className="cb-mission-stats-s">
            <div className="cb-mission-stats-stats">
              <Row className="cb-mission-stats-stats-row">
                <Col className="cb-mission-stats-stat">
                  <div className="cb-mission-stats-number">
                    <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                      <CountUp start={0} end={didViewCountUp ? 5 : 0} duration={2.75} useEasing={true} />
                    </VisibilitySensor>
                  </div>
                  <div className="cb-mission-stats-text">projects every semester</div>
                </Col>
                <Col className="cb-mission-stats-stat">
                  <div className="cb-mission-stats-number">
                    <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                      <CountUp start={0} end={didViewCountUp ? 12 : 0} duration={2.75} useEasing={true} />
                    </VisibilitySensor>
                  </div>
                  <div className="cb-mission-stats-text">weeks of agile development</div>
                </Col>
                <Col className="cb-mission-stats-stat">
                  <div className="cb-mission-stats-number">
                    <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                      <CountUp start={0} end={didViewCountUp ? 25 : 0} duration={2.75} useEasing={true} />
                    </VisibilitySensor>
                  </div>
                  <div className="cb-mission-stats-text">completed projects and counting</div>
                </Col>
                <Col className="cb-mission-stats-stat">
                  <div className="cb-mission-stats-number">
                    <VisibilitySensor onChange={onVisibilityChange} offset={{ bottom: 50 }} delayedCall>
                      <CountUp start={0} end={didViewCountUp ? 46 : 0} duration={2.75} useEasing={true} />
                    </VisibilitySensor>
                  </div>
                  <div className="cb-mission-stats-text">active members and over 100 alumni</div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div className="cb-mission-stats-divider"></div>
    </div>
  )
}

export default MissionStats
