import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

const NotFoundPage = () => {
  const img = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "base-behaviors/seek-continuous-growth.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  return (
    <Layout theme={Theme.LIGHT}>
      <SEO title="404" />
      <div className="cb-wrapper-white">
        <Container>
          <h2 className="cb-section-heading">Oops!</h2>
          <p className="cb-section-text" style={{ marginBottom: "60px" }}>
            You just hit a route that doesn&#39;t exist.
          </p>
          <Img
            fluid={img.file.childImageSharp.fluid}
            fadeIn={false}
            loading="eager"
          />
        </Container>
      </div>
    </Layout>
  )
}

export default NotFoundPage
