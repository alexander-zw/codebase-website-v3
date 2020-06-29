import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"
import BaseBehaviors from "../components/about/base-behaviors/base-behaviors"

const AboutPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="About" />
      <BaseBehaviors />
    </Layout>
  )
}

export default AboutPage
