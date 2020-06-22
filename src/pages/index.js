import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../constants"
import HomeHeader from "../components/home/home-header"

const IndexPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Home" />
      <HomeHeader />
    </Layout>
  )
}

export default IndexPage
