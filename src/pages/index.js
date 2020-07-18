import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"
import HomeHeader from "../components/home/home-header"
import HomeProjects from "../components/home/home-projects"
import HomeTestimonials from "../components/home/home-testimonials"

const IndexPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Home" />
      <HomeHeader />
      <HomeProjects />
      <HomeTestimonials />
    </Layout>
  )
}

export default IndexPage
