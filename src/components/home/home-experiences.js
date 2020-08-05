import React, { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { graphql, useStaticQuery } from "gatsby"
import HorizontalScroll from "./horizontal-scroll"

import "../../styles/home-experiences.css"

const HomeExperiences = () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  const cutoff = 768

  const experiences = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Experiences" } }
        sort: { fields: data___Order }
      ) {
        edges {
          node {
            data {
              Headline
              Photo {
                url
              }
              Blurb
            }
          }
        }
      }
    }
  `)

  const renderedExperience = experiences.allAirtable.edges.map((edge, i) => {
    const { Headline, Photo, Blurb } = edge.node.data
    const { url } = Photo[0]
    const text = (
      <div>
        <p className="cb-home-experiences-col-headline">{Headline}</p>
        <p className="cb-home-experiences-col-blurb">{Blurb}</p>
      </div>
    )
    // Alternate between photo on top and photo on bottom
    return i % 2 === 0 ? (
      <Col md={6} xs={12} className="cb-home-experiences-even-col">
        <img className="cb-home-experiences-even-photo" src={url} alt="" />
        <div className="cb-home-experiences-even-text">{text}</div>
      </Col>
    ) : (
      <Col md={6} xs={12} className="cb-home-experiences-odd-col">
        <div className="cb-home-experiences-odd-text">{text}</div>
        <img className="cb-home-experiences-odd-photo" src={url} alt="" />
      </Col>
    )
  })

  const renderedRowContent = (
    <Row className="cb-home-experiences-row">
      <Col md={5} xs={12} className="cb-home-experiences-col">
        <div className="cb-home-experiences-intro">
          <div className="cb-home-experiences-intro-text">
            <p>
              <span role="img" aria-label="magnifying glass">
                🔎
              </span>
            </p>
            <p>A glimpse into our community</p>
            {width < cutoff && (
              <p className="cb-home-experiences-swipe">
                Swipe or scroll to explore →
              </p>
            )}
          </div>
        </div>
      </Col>
      {width >= cutoff ? (
        <Col xs={13} className="cb-home-experiences-wrapper-col">
          {renderedExperience}
        </Col>
      ) : (
        renderedExperience
      )}
    </Row>
  )

  return (
    <Container fluid className="cb-home-experiences-container">
      {width >= cutoff ? (
        <HorizontalScroll>{renderedRowContent}</HorizontalScroll>
      ) : (
        renderedRowContent
      )}
    </Container>
  )
}

export default HomeExperiences
