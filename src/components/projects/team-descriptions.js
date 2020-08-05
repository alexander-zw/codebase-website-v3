import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import clientIcon from "../../images/icons/client-icon.png"
import mentoredIcon from "../../images/icons/mentored-icon.png"
import "../../styles/team-descriptions.css"
import "../../styles/dual-cards.css"

const TeamDescriptions = () => {
  return (
    <div className="cb-wrapper-white">
      <Container>
        <h2 className="cb-section-heading cb-team-descriptions-heading">
          Our Teams
        </h2>

        <Row>
          <Col md={6} className="cb-dual-cards-col">
            <div className="cb-dual-cards-card">
              <div className="cb-dual-card-content">
                <img
                  src={clientIcon}
                  height="40"
                  alt=""
                  className="cb-team-descriptions-icon"
                />
                <h2 className="cb-team-descriptions-card-title">
                  Client Project
                </h2>
                <p className="cb-team-descriptions-card-text">
                  Our client teams allow those with more experience to work on
                  industry-facing projects and build on their software
                  development foundations.
                </p>
                <p className="cb-team-descriptions-card-text">
                  What you'll do:
                </p>
                <div className="cb-team-descriptions-card-text">
                  <ul class="cb-team-descriptions-card-list">
                    <li>
                      Master new tech stacks by working on projects, such as
                      data science, full-stack development, and back-end
                      infrastructure.
                    </li>
                    <li>
                      Work side by side with engineers at top companies,
                      learning industry workflows and practices.
                    </li>
                    <li>
                      Get a chance to receive feedback and constantly iterate on
                      your work.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="cb-dual-cards-col">
            <div className="cb-dual-cards-card">
              <div className="cb-dual-card-content">
                <img
                  src={mentoredIcon}
                  height="40"
                  alt=""
                  className="cb-team-descriptions-icon"
                />
                <h2 className="cb-team-descriptions-card-title">
                  Mentored Project
                </h2>
                <p className="cb-team-descriptions-card-text">
                  Our mentored team provides the opportunity for those with no
                  prior software engineering experience to learn the skills
                  needed to take on industry-facing projects.
                </p>
                <p className="cb-team-descriptions-card-text">
                  What you'll do:
                </p>
                <div className="cb-team-descriptions-card-text">
                  <ul class="cb-team-descriptions-card-list">
                    <li>
                      Learn good coding practices and build your own personal
                      website from scratch.
                    </li>
                    <li>
                      Design, develop, and deliver a full-stack web application
                      for a nonprofit client.
                    </li>
                    <li>
                      Learn modern frameworks and technologies like React, Node,
                      and GraphQL.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row noGutters className="justify-content-end">
          <Link className="cb-link-blue" to="apply">
            Learn about which project is right for you →
          </Link>
        </Row>
      </Container>
    </div>
  )
}

export default TeamDescriptions
