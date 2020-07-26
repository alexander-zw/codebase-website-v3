import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../../../styles/member-panel.css"

const Member = ({ src, title, name }) => (
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
          <div className="cb-member">
            <div className="cb-member-wrapper">
              <div className="cb-member-overlay">
                <div className="cb-member-title">{title}</div>
                <div className="cb-member-name">{name}</div>
              </div>
            </div>
          </div>
        )
      }

      return (
        <div className="cb-member">
          <div className="cb-member-wrapper">
            <Img
              className="cb-member-image"
              alt={name}
              fluid={image.node.childImageSharp.fluid}
            />
            <div className="cb-member-overlay">
              <div className="cb-member-title">{title}</div>
              <div className="cb-member-name">{name}</div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Member
