import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../../../styles/beyond-cb.css"

const CompanyLogo = ({src, name}) => (
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
  // If failed to load image, display the company name.
    if (!image) {
      return (
        <div className="logo">
          <h2 className="beyond-title">{name}</h2>
        </div>
      )
    }
    var logoSize = "logo";
    if (name === "ea" || name === "salesforce" || name === "stripe") {
      logoSize += " small";
    } else if (name === "robinhood" || name === "facebook" || name === "microsoft" || name === "mongo") {
      logoSize += " big";
    }

    return (
      <div className={logoSize}>
        <Img
          alt={name}
          fluid={image.node.childImageSharp.fluid}
        />
      </div>
    )
  }}
  />
)

export default CompanyLogo