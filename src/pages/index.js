import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import monkey from "../images/ikea_monkey@2x.png"

const IndexPage = ({ location }) => {
  console.log(location)
  return (
    <Layout curPath={location.pathname}>
      <SEO title="Home" />
      <h1>Hi</h1>
      <img src={monkey} alt="monkey"></img>
    </Layout>
  )
}

export default IndexPage
