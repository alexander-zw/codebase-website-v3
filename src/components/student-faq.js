import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"

import "../styles/faq.css"

const StudentFAQ = () => {
  const faq = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Student FAQ" } }
        sort: { fields: data___Order }
      ) {
        edges {
          node {
            data {
              Question
              Answer
            }
          }
        }
      }
    }
  `)

  const renderedFAQ = faq.allAirtable.edges.map(edge => {
    const { Question, Answer } = edge.node.data
    return (
      <div className="cb-faq-block">
        <p className="cb-faq-question">{Question}</p>
        <p className="cb-faq-answer">{Answer}</p>
      </div>
    )
  })

  return (
    <div className="cb-wrapper-white">
      <Container>
        <h2 className="cb-section-heading">Frequently Asked Questions</h2>
        {renderedFAQ}
      </Container>
    </div>
  )
}

export default StudentFAQ
