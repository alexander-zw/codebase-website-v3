import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <Link to="/about/">Go to about page</Link> <br />
    <Link to="/projects/">Go to projects page</Link> <br />
    <Link to="/contact/">Go to contact page</Link> <br />
    <Link to="/apply/">Go to apply page</Link> <br /> */}
  </Layout>
)

export default IndexPage
