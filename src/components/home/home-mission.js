import React, { useState } from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import "../../styles/home-mission.css"

const HomeMission = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false)
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true)
    }
  }
  return (
    <div className="cb-wrapper-gray">
      <Container>
        <Row className="cb-home-mission-heading-row">
          <Col md={12}>
            <h1 className="cb-section-title">ABOUT US</h1>
            <div className="cb-home-mission-section-header">
              <p className="cb-section-heading">
                We are a community of developers that empowers students to break
                into the software industry. We grow together through hands-on
                technical projects and strive to provide all students with
                resources to bridge the gap between academic and practical
                knowledge.
              </p>
            </div>
            <Link className="cb-link-blue cb-home-mission-more" to="/about">
              Learn more →
            </Link>
          </Col>
        </Row>
        <Row className="cb-home-mission-stats-row">
          <Col xs={6} md={3} className="cb-home-mission-stat">
            <div className="cb-home-mission-number">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ bottom: 50 }}
                delayedCall
              >
                <CountUp
                  start={0}
                  end={didViewCountUp ? 5 : 0}
                  duration={2.75}
                  useEasing={true}
                />
              </VisibilitySensor>
            </div>
            <div className="cb-home-mission-text">projects every semester</div>
          </Col>
          <Col xs={6} md={3} className="cb-home-mission-stat">
            <div className="cb-home-mission-number">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ bottom: 50 }}
                delayedCall
              >
                <CountUp
                  start={0}
                  end={didViewCountUp ? 13 : 0}
                  duration={2.75}
                  useEasing={true}
                />
              </VisibilitySensor>
            </div>
            <div className="cb-home-mission-text">
              weeks of agile development
            </div>
          </Col>
          <Col xs={6} md={3} className="cb-home-mission-stat">
            <div className="cb-home-mission-number">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ bottom: 50 }}
                delayedCall
              >
                <CountUp
                  start={0}
                  end={didViewCountUp ? 39 : 0}
                  duration={2.75}
                  useEasing={true}
                />
              </VisibilitySensor>
            </div>
            <div className="cb-home-mission-text">
              completed projects and counting
            </div>
          </Col>
          <Col xs={6} md={3} className="cb-home-mission-stat">
            <div className="cb-home-mission-number">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ bottom: 50 }}
                delayedCall
              >
                <CountUp
                  start={0}
                  end={didViewCountUp ? 47 : 0}
                  duration={2.75}
                  useEasing={true}
                />
              </VisibilitySensor>
            </div>
            <div className="cb-home-mission-text cb-home-mission-text-long">
              active members and over 100 alumni
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeMission
