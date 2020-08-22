import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ScrollContainer from "react-indiana-drag-scroll"

import { CardColors } from "../../constants"
import "../../styles/application-process.css"
import "../../styles/draggable-row.css"

const ApplicationProcess = () => {
  const recruitmentData = useStaticQuery(graphql`
    query {
      events: allAirtable(
        filter: { table: { eq: "Recruitment Events" } }
        sort: { fields: data___Order }
      ) {
        edges {
          node {
            data {
              Name
              Date
              Description
              Link
              Link_Text
            }
          }
        }
      }
      control: allAirtable(filter: { table: { eq: "Recruitment Control" } }) {
        edges {
          node {
            data {
              Current_Semester
              GCal_Link
            }
          }
        }
      }
    }
  `)

  const {
    Current_Semester,
    GCal_Link,
  } = recruitmentData.control.edges[0].node.data

  const eventData = recruitmentData.events.edges.map((edge, index) => {
    const { Name, Date, Description, Link, Link_Text } = edge.node.data
    return (
      <Col
        sm={12}
        className={`cb-card cb-draggable-row-card ${
          CardColors[index % CardColors.length]
        }`}
      >
        <div className="cb-card-body">
          <h2 className="cb-application-process-card-title">{Name}</h2>
          <p className="cb-application-process-card-date">{Date}</p>
          <p className="cb-application-process-card-text">{Description}</p>
          <a className="cb-application-process-card-link" href={Link}>
            {Link_Text}
          </a>
        </div>
      </Col>
    )
  })

  return (
    <div className="cb-wrapper-gray" id="application-process">
      <Container>
        <div className="cb-application-process-header">
          <h1 className="cb-section-heading">Recruitment Timeline</h1>
          <p className="cb-section-text">
            Below is the recruitment timeline for {Current_Semester}. Click{" "}
            <a className="cb-application-process-link" href={GCal_Link}>
              here
            </a>{" "}
            to copy these events to your Google calendar!
          </p>
        </div>
      </Container>
      <ScrollContainer className="cb-draggable-row-container">
        <Container>
          <Row noGutters className="cb-draggable-row-row">
            {eventData}
            <div className="cb-draggable-row-hidden"></div>
          </Row>
        </Container>
      </ScrollContainer>
    </div>
  )
}

export default ApplicationProcess
