import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"
import AboutHeader from "../components/about/about-header"
import BaseBehaviors from "../components/about/base-behaviors/base-behaviors"
import BeyondCodebase from "../components/about/beyond-cb/beyond-cb"
import ClubStructure from "../components/about/club-structure"

const AboutPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="About" />
      <AboutHeader />
      <BaseBehaviors />
      <ClubStructure />
      <BeyondCodebase />
    </Layout>
  )
}

export default AboutPage
