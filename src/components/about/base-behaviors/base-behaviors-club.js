import React from "react"

import "../../../styles/base-behaviors.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BaseBehaviorsClub = () => {
  const data = useStaticQuery(graphql`
    query {
      clubPhoto: file(relativePath: { eq: "club-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1140, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Img
      className="cb-bb-club-image"
      fluid={data.clubPhoto.childImageSharp.fluid}
      fadeIn={false}
    />
  )
}

export default BaseBehaviorsClub
