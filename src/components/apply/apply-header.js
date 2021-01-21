import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import "../../styles/apply-header.css"

const ApplyHeader = () => {
  const currentRecruitment = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Recruitment Control" } }) {
        edges {
          node {
            data {
              Current_Semester
              Applications_Open
              Interest_Form_URL
              Discord_URL
              Blog_URL
            }
          }
        }
      }
    }
  `)

  const {
    Current_Semester,
    Applications_Open,
    Interest_Form_URL,
    Discord_URL,
    Blog_URL,
  } = currentRecruitment.allAirtable.edges[0].node.data

  return (
    <div className="cb-apply-header-bg">
      <Container>
        <h1 className="cb-apply-header-title">RECRUITMENT</h1>
        <h1 className="cb-apply-header-subtitle">Join Our Community</h1>
        {Applications_Open === "No" ? (
          <p className="cb-apply-header-text">
            Applications are officially closed at this moment. We will be
            recruiting again for {Current_Semester}. Sign up to be notified when
            apps are ready!
          </p>
        ) : (
          <p className="cb-apply-header-text">
            Applications are open for the semester! We are looking for both
            client and mentored developers. Our application deadline is
            January 28, at 3AM PT! Feel free to attend any of our recruitment
            events below to learn more.
          </p>
        )}

        <Row noGutters>
          <a className="cb-apply-header-button" href={Interest_Form_URL}>
            Fill out interest form →
          </a>
          {Applications_Open === "Yes" && (
            <>
              <a className="cb-apply-header-button" href={Discord_URL}>
                Join our virtual table Discord →
              </a>
              <a className="cb-apply-header-button" href={Blog_URL}>
                Read about our semester plans →
              </a>
            </>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default ApplyHeader
