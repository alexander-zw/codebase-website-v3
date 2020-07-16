import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"
import MemberPanel from "../components/about/member-panel/member-panel"
import BaseBehaviors from "../components/about/base-behaviors/base-behaviors"
import BeyondCodebase from "../components/about/beyond-cb/beyond-cb"

const AboutPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="About" />
      <BaseBehaviors />
      <MemberPanel />
      <BeyondCodebase />
    </Layout>
  )
}

export default AboutPage
