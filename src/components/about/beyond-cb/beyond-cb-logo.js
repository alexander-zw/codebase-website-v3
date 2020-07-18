import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../../../styles/beyond-cb.css"
import { LogoSize } from "../../../constants"

const CompanyLogo = ({ src, name, size }) => (
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

      if (!image) {
        return (
          <div className="cb-beyond-logo">
            <h2 className="cb-beyond-title">{name}</h2>
          </div>
        )
      }

      var logoSize = "cb-beyond-logo"

      if (src === LogoSize.SMALL) {
        logoSize += " cb-beyond-small"
      } else if (src === LogoSize.LARGE) {
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
