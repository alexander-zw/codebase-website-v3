import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../../../styles/beyond-cb.css"

const CompanyLogo = ({ src, name }) => (
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
          <div className="cb-beyond-logo">
            <h2 className="cb-beyond-title">{name}</h2>
          </div>
        )
      }

      var logoSize = "cb-beyond-logo"
      if (name === "ea" || name === "salesforce" || name === "stripe") {
        logoSize += " cb-beyond-small"
      } else if (
        name === "robinhood" ||
        name === "facebook" ||
        name === "microsoft" ||
        name === "mongo"
      ) {
        logoSize += " cb-beyond-big"
      }

      return (
        <div className={logoSize}>
          <Img alt={name} fluid={image.node.childImageSharp.fluid} />
        </div>
      )
    }}
  />
)

export default CompanyLogo
