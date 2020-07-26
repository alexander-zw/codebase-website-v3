import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

import HomeHeader from "../components/home/home-header"
import HomeMission from "../components/home/home-mission"
import CurrentProjects from "../components/current-projects"
import HomeTestimonials from "../components/home/home-testimonials"
import HomeInvolved from "../components/home/home-involved"

const IndexPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Home" />
      <HomeHeader />
      <HomeMission />
      <CurrentProjects />
      <HomeInvolved />
      <HomeTestimonials />
    </Layout>
  )
}

export default IndexPage
