import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { CardColors, Background } from "../constants"
import "../styles/current-projects.css"
import "../styles/projects-cards.css"

const CurrentProjects = ({ bg }) => {
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

  const clientCards = currentProjects.allAirtable.edges
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
              <a href={Hyperlink}>
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

  const mentoredData = currentProjects.allAirtable.edges.filter(
    edge => !edge.node.data.Client
  )[0].node.data

  const mentoredCard = (
    <Col md={6} className="cb-projects-col">
      <div
        className={`cb-card cb-projects-card cb-current-projects-mentored-card ${CardColors[0]}`}
      >
        <div className="cb-card-body">
          <a href={mentoredData.Hyperlink}>
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
    <div
      className={`${
        bg === Background.GRAY ? "cb-wrapper-gray" : "cb-wrapper-white"
      }`}
    >
      <Container>
        <h1 className="cb-section-title">THIS SEMESTER'S PROJECTS</h1>
        <div className="cb-projects-section-header">
          <h2 className="cb-section-heading">Client Projects</h2>
          <p className="cb-section-text">
            Our client teams work with industry partners to build products
            ranging from full stack web development to machine learning.
          </p>
        </div>

        <a
          className="cb-link-blue"
          href="https://medium.com/berkeley-codebase/the-client-program-experience-5d90ee6b294e"
        >
          Read about the client experience →
        </a>

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
              href="https://medium.com/berkeley-codebase/the-mentored-program-experience-4504e1f6393d"
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
