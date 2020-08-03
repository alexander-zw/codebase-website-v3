import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

import ClientsContact from "../components/contact/clients-contact"

const ClientsPage = ({ location }) => {
  return (
    <Layout theme={Theme.LIGHT}>
      <SEO title="Clients" />
      <ClientsContact />
    </Layout>
  )
}

export default ClientsPage
