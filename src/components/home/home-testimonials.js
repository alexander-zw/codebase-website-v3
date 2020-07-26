import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import ReactAliceCarousel from "react-alice-carousel"

import "../../styles/home-testimonials.css"

const HomeTestimonials = () => {
  const currentTestimonials = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Testimonials" } }) {
        edges {
          node {
            data {
              Company
              Role
              Text
            }
          }
        }
      }
    }
  `)

  const { edges } = currentTestimonials.allAirtable

  const testimonialData = edges.map(edge => {
    const { Company, Role, Text } = edge.node.data
    return (
      <div
        onDragStart={handleOnDragStart}
        className="cb-home-testimonials-entry"
        role="textbox"
        tabIndex={0}
      >
        <p className="cb-home-testimonials-quote">"{Text}"</p>
        <p className="cb-home-testimonials-quote">
          <b className="cb-home-testimonials-author">{Company},</b> {Role}
        </p>
      </div>
    )
  })

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 2,
    },
  }

  const handleOnDragStart = e => e.preventDefault()

  return (
    <div className="cb-wrapper-blue">
      <Container className="cb-home-testimonials-container">
        <Row>
          <ReactAliceCarousel
            autoPlay
            autoPlayInterval="5000"
            responsive={responsive}
            stopAutoPlayOnHover
            mouseTrackingEnabled
            buttonsDisabled
          >
            {testimonialData}
          </ReactAliceCarousel>
        </Row>
      </Container>
    </div>
  )
}

export default HomeTestimonials
