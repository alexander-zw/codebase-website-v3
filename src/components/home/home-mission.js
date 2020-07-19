import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import { Link } from "gatsby"

import "../../styles/home-mission.css"

const HomeMission = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false)
  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true)
    }
  }
  return (
    <div className="cb-home-mission-bg">
      <Container>
        <Row className="cb-home-mission-mission-row">
          <Col md={12}>
            <h1 className="cb-home-mission-title">ABOUT US</h1>
            <div className="cb-home-mission-mission">
              <p className="cb-home-mission-description">
                We are a software development club that strives to build a
                community where passionate and driven engineers can grow
                together through meaningful industry initiatives.
              </p>
            </div>
            <Link className="cb-blue-link cb-home-mission-more" to="/about">
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
                  end={didViewCountUp ? 12 : 0}
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
                  end={didViewCountUp ? 25 : 0}
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
                  end={didViewCountUp ? 46 : 0}
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
