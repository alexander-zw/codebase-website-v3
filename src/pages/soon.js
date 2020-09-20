import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

const ComingSoonPage = () => {
  const query = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Recruitment Control" } }) {
        edges {
          node {
            data {
              Interest_Form_URL
            }
          }
        }
      }
      file(relativePath: { eq: "base-behaviors/genuinely-give-back.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  const { Interest_Form_URL } = query.allAirtable.edges[0].node.data

  return (
    <Layout theme={Theme.LIGHT}>
      <SEO title="Coming Soon" />
      <div className="cb-wrapper-white">
        <Container>
          <h2 className="cb-section-heading">Coming Soon!</h2>
          <p className="cb-section-text" style={{ marginBottom: "60px" }}>
            Sorry about that! We're currently hard at work preparing this
            resource and we'll try to make it available as soon as possible.
          </p>
          <Img
            fluid={query.file.childImageSharp.fluid}
            fadeIn={false}
            loading="eager"
          />
        </Container>
      </div>
    </Layout>
  )
}

export default ComingSoonPage
