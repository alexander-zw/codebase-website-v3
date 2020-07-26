import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

const ContactPage = ({ location }) => {
  return (
    <Layout theme={Theme.LIGHT}>
      <SEO title="Contact" />
      <h1>Contact</h1>
    </Layout>
  )
}

export default ContactPage
