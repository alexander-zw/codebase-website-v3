import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme, Background } from "../constants"

import HomeHeader from "../components/home/home-header"
import HomeMission from "../components/home/home-mission"
import CurrentProjects from "../components/current-projects"
import HomeExperiences from "../components/home/home-experiences"
import HomeTestimonials from "../components/home/home-testimonials"
import HomeInvolved from "../components/home/home-involved"

const IndexPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Codebase" />
      <HomeHeader />
      <HomeMission />
      <HomeExperiences />
      <CurrentProjects bg={Background.GRAY} />
      <HomeInvolved />
      <HomeTestimonials />
    </Layout>
  )
}

export default IndexPage
