import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import ScrollContainer from "react-indiana-drag-scroll"
import ReactAliceCarousel from "react-alice-carousel"

import "../../styles/development-timeline.css"
import "../../styles/draggable-row.css"

const DevelopmentTimeline = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }, [])

  const cutoff = 479

  const timeline = useStaticQuery(graphql`
    query {
      allAirtable(
        filter: { table: { eq: "Timeline" } }
        sort: { fields: data___Order }
      ) {
        edges {
          node {
            data {
              Headline
              Blurb
              Photo {
                url
              }
            }
          }
        }
      }
    }
  `)

  const timelineHorizontal = timeline.allAirtable.edges.map((edge, index) => {
    const { Headline, Photo, Blurb } = edge.node.data
    const { url } = Photo[0]
    return (
      <div className="cb-development-timeline-col">
        <img className="cb-development-timeline-img" src={url} alt="" />
        <p className="cb-development-timeline-headline">{Headline}</p>
        <p className="cb-development-timeline-blurb">{Blurb}</p>
      </div>
    )
  })

  const handleOnDragStart = e => e.preventDefault()

  const timelineCarousel = timeline.allAirtable.edges.map(edge => {
    const { Headline, Photo, Blurb } = edge.node.data
    const { url } = Photo[0]
    return (
      <div
        onDragStart={handleOnDragStart}
        className="cb-development-timeline-col"
        role="textbox"
        tabIndex={0}
      >
        <img className="cb-development-timeline-img" src={url} alt="" />
        <p className="cb-development-timeline-headline">{Headline}</p>
        <p className="cb-development-timeline-blurb">{Blurb}</p>
      </div>
    )
  })

  return (
    <div className="cb-wrapper-gray">
      <Container>
        <div className="cb-development-timeline-header">
          <h1 className="cb-section-heading">Development Timeline</h1>
          <p className="cb-section-text">
            Here’s a breakdown of how our projects are run every semester.
          </p>
        </div>
      </Container>
      {width >= cutoff ? (
        <ScrollContainer className="cb-draggable-row-container">
          <Container>
            <Row
              noGutters
              className="cb-development-timeline-row cb-draggable-row-row"
            >
              {timelineHorizontal}
              <div className="cb-draggable-row-hidden"></div>
            </Row>
          </Container>
        </ScrollContainer>
      ) : (
        <Container>
          <Row noGutters>
            <ReactAliceCarousel mouseTrackingEnabled buttonsDisabled>
              {timelineCarousel}
            </ReactAliceCarousel>
          </Row>
        </Container>
      )}
    </div>
  )
}

export default DevelopmentTimeline
