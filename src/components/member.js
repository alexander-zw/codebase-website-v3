import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/member.css"

const Member = ({src, title, name}) => (
  // Load image using gatsby-image
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(src)
	  })
	  // If failed to load image, display the member without an image.
      if (!image) {
        return (
          <div className="member">
            <div className="member-wrapper">
              <div className="member-overlay">
                <div className="member-title">{title}</div>
                <div className="member-name">{name}</div>
              </div>
            </div>
          </div>
        )
      }

      return (
        <div className="member">
          <div className="member-wrapper">
            <Img
              className="member-image"
              alt={name}
              fluid={image.node.childImageSharp.fluid}
            />
            <div className="member-overlay">
              <div className="member-title">{title}</div>
              <div className="member-name">{name}</div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Member
