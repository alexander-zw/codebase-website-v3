import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../../styles/club-structure.css"
import "../../styles/layout.css"

const ClubStructure = () => {
  return (
    <div className="cb-club-structure-container">
      <Container>
        <div className="cb-club-structure-header">
          <h1 className="cb-club-structure-title">Club Structure</h1>
          <p className="cb-club-structure-subtitle">
            Throughout their time in Codebase, our members take on a variety of
            positions. Our structure is relatively flat so that everybody has an
            active role in shaping our club.
          </p>
          <a
            className="cb-blue-link cb-club-structure-link"
            href="https://medium.com/berkeley-codebase/the-mentored-project-72db8aabb70e"
            target="_source"
          >
            Read about our members’ experiences →
          </a>
        </div>
      </Container>
      <div className="cb-club-structure-row-container">
        <Container>
          <Row noGutters className="cb-club-structure-row">
            <Col
              sm={12}
              className="cb-club-structure-card cb-club-structure-blue"
            >
              <div className="cb-club-structure-card-body">
                <h2 className="cb-club-structure-card-title">Executive</h2>
                <p className="cb-club-structure-card-text">
                  “As an exec member, I’m able to spearhead different iniatives
                  that I’m passionate about! I oversee the club’s external
                  events and resources, help develop our close-knit community,
                  and ensure that our projects run smoothly every semester.”
                </p>
              </div>
            </Col>
            <Col
              sm={12}
              className="cb-club-structure-card cb-club-structure-navy"
            >
              <div className="cb-club-structure-card-body">
                <h2 className="cb-club-structure-card-title">
                  Client Project Manager
                </h2>
                <p className="cb-club-structure-card-text">
                  “Client PMs are at the core of our organization! We help
                  create the overall experience for the majority of our club’s
                  members. As team leads, we interface with industry clients,
                  plan educational projects for our developers, and deliver
                  complete technical products every semester.”
                </p>
              </div>
            </Col>
            <Col
              sm={12}
              className="cb-club-structure-card cb-club-structure-green"
            >
              <div className="cb-club-structure-card-body">
                <h2 className="cb-club-structure-card-title">
                  Client Project Developer
                </h2>
                <p className="cb-club-structure-card-text">
                  “The best part about being a client developer is having the
                  ability to choose which project you want to work on. Every
                  semester, I’m able to learn a completely new tech stack,
                  develop for a new client, and work with a new team of students
                  passionate about the project.”
                </p>
              </div>
            </Col>
            <Col
              sm={12}
              className="cb-club-structure-card cb-club-structure-orange"
            >
              <div className="cb-club-structure-card-body">
                <h2 className="cb-club-structure-card-title">
                  Mentored Project Manager
                </h2>
                <p className="cb-club-structure-card-text">
                  “I wanted to become a mentored PM to give back to a community
                  that’s special to me. It’s a really unique experience to
                  develop a curriculum that helps students gain confidence in
                  themselves and watch them grow in such a short span of time.”
                </p>
              </div>
            </Col>
            <Col
              sm={12}
              className="cb-club-structure-card cb-club-structure-blue"
            >
              <div className="cb-club-structure-card-body">
                <h2 className="cb-club-structure-card-title">
                  Mentored Project Developer
                </h2>
                <p className="cb-club-structure-card-text">
                  “Being a developer in the mentored project opened up the whole
                  new world of software engineering for me. Going through the
                  program gave me confidence in my ability to learn and to code.
                  It also gave me the chance to meet some of the closest friends
                  I have at Cal!”
                </p>
              </div>
            </Col>
            <div className="cb-club-structure-hidden"></div>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ClubStructure
