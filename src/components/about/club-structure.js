import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ScrollContainer from "react-indiana-drag-scroll"

import { CardColors } from "../../constants"
import "../../styles/club-structure.css"

const ClubStructure = () => {
  const roles = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Roles" } }
        sort: { fields: data___Order }
      ) {
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

  const roleData = roles.allAirtable.edges.map((edge, index) => {
    const { Role, Text } = edge.node.data
    return (
      <Col
        sm={12}
        className={`cb-card cb-club-structure-card ${
          CardColors[index % CardColors.length]
        }`}
      >
        <div className="cb-card-body">
          <h2 className="cb-club-structure-card-title">{Role}</h2>
          <p className="cb-club-structure-card-text">{Text}</p>
        </div>
      </Col>
    )
  })

  return (
    <div className="cb-wrapper-gray">
      <Container>
        <div className="cb-club-structure-header">
          <h1 className="cb-section-heading">Club Structure</h1>
          <p className="cb-section-text">
            Throughout their time in Codebase, our members take on a variety of
            positions. Our structure is relatively flat so that everybody has an
            active role in shaping our club.
          </p>
          <a
            className="cb-link-blue"
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
