import React from "react"

import "../../../styles/base-behaviors.css"
import { BaseBehavior } from "../../../constants"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BaseBehaviorsImages = ({ baseBehavior }) => {
  const data = useStaticQuery(graphql`
    query {
      activelyTakeOwnership: file(
        relativePath: { eq: "base-behaviors/actively-take-ownership.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      communicateCandidly: file(
        relativePath: { eq: "base-behaviors/communicate-candidly.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      genuinelyGiveBack: file(
        relativePath: { eq: "base-behaviors/genuinely-give-back.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      putPeopleFirst: file(
        relativePath: { eq: "base-behaviors/put-people-first.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      seekContinuousGrowth: file(
        relativePath: { eq: "base-behaviors/seek-continuous-growth.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  const getImage = baseBehavior => {
    switch (baseBehavior) {
      case BaseBehavior.OWNERSHIP:
        return (
          <Img
            fluid={data.activelyTakeOwnership.childImageSharp.fluid}
            fadeIn={false}
            loading="eager"
          />
        )
      case BaseBehavior.COMMUNICATE:
        return (
          <Img
            fluid={data.communicateCandidly.childImageSharp.fluid}
            fadeIn={false}
            loading="eager"
          />
        )
      case BaseBehavior.GIVE:
        return (
          <Img
            fluid={data.genuinelyGiveBack.childImageSharp.fluid}
            fadeIn={false}
            loading="eager"
          />
        )
      case BaseBehavior.PEOPLE:
        return (
          <Img
            fluid={data.putPeopleFirst.childImageSharp.fluid}
            fadeIn={false}
            loading="eager"
          />
        )
      case BaseBehavior.GROWTH:
        return (
          <Img
            fluid={data.seekContinuousGrowth.childImageSharp.fluid}
            fadeIn={false}
            loading="eager"
          />
        )
      default:
        return
    }
  }

  return getImage(baseBehavior)
}

export default BaseBehaviorsImages
