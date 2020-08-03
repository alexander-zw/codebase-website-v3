import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import "../../styles/past-projects.css"
import "../../styles/projects-cards.css"

const PastProjects = () => {
  const pastProjects = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Projects" }, data: { Showcase: { eq: true } } }
      ) {
        edges {
          node {
            data {
              Company
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

  const projectCards = pastProjects.allAirtable.edges.map((edge, index) => {
    const { Logo, Type, Description, Hyperlink, Company } = edge.node.data
    return (
      <Col lg={3} md={6} sm={6} xs={12} className="cb-projects-col">
        <div className="cb-card cb-projects-card cb-past-projects-card">
          <div className="cb-card-body">
            <a href={Hyperlink} target="_source">
              <img
                src={Logo[0].url}
                alt={Company}
                className="cb-projects-logo"
              ></img>
            </a>
            <div className="cb-past-projects-type">
              <b>{Type}</b>
            </div>
            <p className="cb-past-projects-text">{Description}</p>
          </div>
        </div>
      </Col>
    )
  })

  return (
    <div className="cb-wrapper-white">
      <Container>
        <div className="cb-projects-section-header">
          <h2 className="cb-section-heading">Past Projects</h2>
          <p className="cb-section-text">
            Every semester we take on five new projects with high growth tech
            companies. Here are some of our past projects!
          </p>
        </div>

        <Row className="cb-projects-card-row cb-past-projects-card-row">
          {projectCards}{" "}
        </Row>
      </Container>
    </div>
  )
}

export default PastProjects
