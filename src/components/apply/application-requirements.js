import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import clientIcon from "../../images/icons/client-icon.png"
import mentoredIcon from "../../images/icons/mentored-icon.png"
import "../../styles/application-requirements.css"
import "../../styles/dual-cards.css"

const ApplicationRequirements = () => {
  const currentRecruitment = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Recruitment Control" } }) {
        edges {
          node {
            data {
              Current_Semester
              Client_Application
              Mentored_Application
            }
          }
        }
      }
    }
  `)

  const {
    Current_Semester,
    Client_Application,
    Mentored_Application,
  } = currentRecruitment.allAirtable.edges[0].node.data

  return (
    <div className="cb-wrapper-white">
      <Container>
        <Row>
          <Col md={6} className="cb-dual-cards-col">
            <div className="cb-dual-cards-card">
              <div className="cb-dual-card-content">
                <img
                  src={clientIcon}
                  height="40"
                  alt=""
                  className="cb-application-requirements-icon"
                />
                <h2 className="cb-application-requirements-card-title">
                  Client Project
                </h2>
                <p className="cb-application-requirements-card-text">
                  Our client teams work with industry partners to build products
                  ranging from full stack web development to machine learning.
                </p>
                <p className="cb-application-requirements-card-text">
                  Requirements:
                </p>
                <div className="cb-application-requirements-card-text">
                  <ul class="cb-application-requirements-card-list">
                    <li>
                      At least 2 semesters left at Cal (including{" "}
                      {Current_Semester}).
                    </li>
                    <li>
                      Taken or are concurrently enrolled in CS 61A or previous
                      coding experience.
                    </li>
                    <li>
                      Completed a significant coding project (side project or
                      industry experience).
                    </li>
                  </ul>
                </div>
                <div className="cb-application-requirements-button-container">
                  <a
                    className="cb-application-requirements-button"
                    href={Client_Application}
                  >
                    Apply →
                  </a>
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
                  className="cb-application-requirements-icon"
                />
                <h2 className="cb-application-requirements-card-title">
                  Mentored Project
                </h2>
                <p className="cb-application-requirements-card-text">
                  Our mentored team focuses on learning the essentials of
                  software development and simultaneously develops an full-stack
                  web application for a non-profit organization.
                </p>
                <p className="cb-application-requirements-card-text">
                  Requirements:
                </p>
                <div className="cb-application-requirements-card-text">
                  <ul class="cb-application-requirements-card-list">
                    <li>
                      At least 3 semesters left at Cal (including{" "}
                      {Current_Semester}).
                    </li>
                    <li>
                      Taken or are concurrently enrolled in CS 61A or previous
                      coding experience.
                    </li>
                    <li>No prior industry experience.</li>
                  </ul>
                </div>
                <div className="cb-application-requirements-button-container">
                  <a
                    className="cb-application-requirements-button"
                    href={Mentored_Application}
                  >
                    Apply →
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row noGutters className="justify-content-end">
          <Link className="cb-link-blue" to="projects">
            Learn more about our projects →
          </Link>
        </Row>
      </Container>
    </div>
  )
}

export default ApplicationRequirements
