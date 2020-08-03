import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

import GeneralContact from "../components/contact/general-contact"

const ContactPage = ({ location }) => {
  return (
    <Layout theme={Theme.LIGHT}>
      <SEO title="Contact" />
      <GeneralContact />
    </Layout>
  )
}

export default ContactPage
