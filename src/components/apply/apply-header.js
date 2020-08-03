import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"

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
  } = currentRecruitment.allAirtable.edges[0].node.data

  return (
    <div className="cb-apply-header-bg">
      <Container>
        <h1 className="cb-apply-header-title">RECRUITMENT</h1>
        <h1 className="cb-apply-header-subtitle">Join Our Community</h1>
        {Applications_Open === "No" ? (
          <p className="cb-apply-header-text">
            Applications are officially closed for this semester. We will be
            recruiting again for {Current_Semester}. Sign up to be notified when
            apps are ready!
          </p>
        ) : (
          <p className="cb-apply-header-text">
            Applications are open for the semester! We are looking for both
            client and mentored developers. Sign up to be notified about
            recruitment events!
          </p>
        )}

        <a
          className="cb-apply-header-button"
          href={Interest_Form_URL}
          target="_source"
        >
          Fill out interest form →
        </a>
      </Container>
    </div>
  )
}

export default ApplyHeader
