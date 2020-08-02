import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { CardColors } from "../constants"
import "../styles/current-projects.css"
import "../styles/projects-cards.css"

const CurrentProjects = () => {
  const currentProjects = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Projects" }, data: { Current: { eq: true } } }
      ) {
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
        <Col lg={3} md={6} sm={6} xs={12} className="cb-projects-col">
          <div
            className={`cb-card cb-projects-card cb-current-projects-client-card ${
              CardColors[index % CardColors.length]
            }`}
          >
            <div className="cb-card-body">
              <a href={Hyperlink} target="_source">
                <img
                  src={Logo[0].url}
                  alt={Company}
                  className="cb-projects-logo"
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
    <Col md={6} className="cb-projects-col">
      <div
        className={`cb-card cb-projects-card cb-current-projects-mentored-card ${CardColors[0]}`}
      >
        <div className="cb-card-body">
          <a href={mentoredData.Hyperlink} target="_source">
            <img
              src={mentoredData.Logo[0].url}
              alt={mentoredData.Company}
              className="cb-projects-logo"
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
    <div className="cb-wrapper-gray">
      <Container>
        <h1 className="cb-section-title">THIS SEMESTER'S PROJECTS</h1>
        <div className="cb-projects-section-header">
          <h2 className="cb-section-heading">Client Projects</h2>
          <p className="cb-section-text">
            Our client teams work with industry partners to build products
            ranging from full stack web development to machine learning.
          </p>
        </div>

        <Link className="cb-link-blue" to="projects">
          Read about the client experience →
        </Link>

        <Row className="cb-projects-card-row"> {clientCards} </Row>

        <Row>
          <Col md={6}>
            <div className="cb-projects-section-header">
              <h2 className="cb-section-heading">Mentored Project</h2>
              <p className="cb-section-text">
                Our mentored team focuses on learning the essentials of software
                development and simultaneously develops an full-stack web
                application for a non-profit organization.
              </p>
            </div>

            <a
              className="cb-link-blue"
              href="https://medium.com/berkeley-codebase/the-mentored-project-72db8aabb70e"
              target="_source"
            >
              Read about the mentored experience →
            </a>
          </Col>
          {mentoredCard}
        </Row>
      </Container>
    </div>
  )
}

export default CurrentProjects
