import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { CardColors } from "../constants"

import "../styles/current-projects.css"
import "../styles/layout.css"

const CurrentProjects = () => {
  const currentProjects = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Projects" } }) {
        edges {
          node {
            data {
              Company
              Client
              Logo {
                url
              }
              Type
              Description
              Hyperlink
            }
          }
        }
      }
    }
  `)

  const { edges } = currentProjects.allAirtable

  const clientCards = edges
    .filter(edge => !!edge.node.data.Client)
    .map((edge, index) => {
      const { Logo, Type, Description, Hyperlink, Company } = edge.node.data
      return (
        <Col lg={3} md={6} sm={6} xs={12} className="cb-current-projects-col">
          <div
            className={`cb-current-projects-card ${
              CardColors[index % CardColors.length]
            }`}
          >
            <div className="cb-current-projects-card-body">
              <a target="_blank" rel="noopener noreferrer" href={Hyperlink}>
                <img
                  className="cb-current-projects-logo"
                  src={Logo[0].url}
                  alt={Company}
                ></img>
              </a>
              <div className="cb-current-projects-type">
                <b>{Type}</b>
              </div>
              <p className="cb-current-projects-text">{Description}</p>
            </div>
          </div>
        </Col>
      )
    })

  const mentoredData = edges.filter(edge => !edge.node.data.Client)[0].node.data

  const mentoredCard = (
    <Col md={6} className="cb-current-projects-mentored-col">
      <div className={`cb-current-projects-mentored-card ${CardColors[0]}`}>
        <div className="cb-current-projects-card-body">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={mentoredData.Hyperlink}
          >
            <img
              className="cb-current-projects-logo"
              src={mentoredData.Logo[0].url}
              alt={mentoredData.Company}
            ></img>
          </a>
          <div className="cb-current-projects-type">
            <b>{mentoredData.Type}</b>
          </div>
          <p className="cb-current-projects-text">{mentoredData.Description}</p>
        </div>
      </div>
    </Col>
  )

  return (
    <div className="cb-current-projects-container">
      <Container className="cb-current-projects">
        <h1 className="cb-current-projects-title">THIS SEMESTER'S PROJECTS</h1>

        <div className="cb-current-projects-section">
          <div className="cb-current-projects-section-header">
            <h2 className="cb-current-projects-section-title">
              Client Projects
            </h2>
            <p className="cb-current-projects-section-blurb">
              Our client teams work with industry partners to build products
              ranging from full stack web development to machine learning.
            </p>
          </div>

          <Link className="cb-blue-link" to="projects">
            Read about the client experience →
          </Link>

          <Row className="cb-current-projects-card-row"> {clientCards} </Row>
        </div>

        <Row>
          <Col md={6}>
            <div className="cb-current-projects-section">
              <div className="cb-current-projects-section-header">
                <h2 className="cb-current-projects-section-title">
                  Mentored Project
                </h2>
                <p className="cb-current-projects-section-blurb">
                  Our mentored team focuses on learning the essentials of
                  software development and simultaneously develops an full-stack
                  web application for a non-profit organization.
                </p>
              </div>

              <a
                className="cb-blue-link"
                href="https://medium.com/berkeley-codebase/the-mentored-project-72db8aabb70e"
                target="_source"
              >
                Read about the mentored experience →
              </a>
            </div>
          </Col>
          {mentoredCard}
        </Row>
      </Container>
    </div>
  )
}

export default CurrentProjects
