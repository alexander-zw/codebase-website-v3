import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ScrollContainer from "react-indiana-drag-scroll"

import "../../styles/club-structure.css"
import "../../styles/layout.css"

const ClubStructure = () => {
  const currentRoles = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Roles" } }) {
        edges {
          node {
            data {
              Role
              Text
            }
          }
        }
      }
    }
  `)

  const { edges } = currentRoles.allAirtable
  const colorClass = [
    "cb-club-structure-blue",
    "cb-club-structure-navy",
    "cb-club-structure-green",
    "cb-club-structure-orange",
  ]

  const roleData = edges.map((edge, index) => {
    const { Role, Text } = edge.node.data
    return (
      <Col
        sm={12}
        className={`cb-club-structure-card ${
          colorClass[index % colorClass.length]
        }`}
      >
        <div className="cb-club-structure-card-body">
          <h2 className="cb-club-structure-card-title">{Role}</h2>
          <p className="cb-club-structure-card-text">{Text}</p>
        </div>
      </Col>
    )
  })

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
      <ScrollContainer className="cb-club-structure-row-container">
        <Container>
          <Row noGutters className="cb-club-structure-row">
            {roleData}
            <div className="cb-club-structure-hidden"></div>
          </Row>
        </Container>
      </ScrollContainer>
    </div>
  )
}

export default ClubStructure
