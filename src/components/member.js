import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../styles/member.css"

const Member = props => (
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
        return n.node.relativePath.includes(props.src)
	  })
	  // If failed to load image, display the member without an image.
      if (!image) {
        return (
          <div class="member">
            <div class="wrapper">
              <div class="overlay">
                <div class="title">{props.title}</div>
                <div class="name">{props.name}</div>
              </div>
            </div>
          </div>
        )
      }

      return (
        <div class="member">
          <div class="wrapper">
            <Img
              className="image"
              alt={props.alt}
              fluid={image.node.childImageSharp.fluid}
            />
            <div class="overlay">
              <div class="title">{props.title}</div>
              <div class="name">{props.name}</div>
            </div>
          </div>
        </div>
      )
    }}
  />
)

export default Member
