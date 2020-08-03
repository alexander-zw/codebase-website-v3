import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

import ApplyHeader from "../components/apply/apply-header"
import ApplicationProcess from "../components/apply/application-process"
import ApplicationRequirements from "../components/apply/application-requirements"

const ApplyPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="Apply" />
      <ApplyHeader />
      <ApplicationRequirements />
      <ApplicationProcess />
    </Layout>
  )
}

export default ApplyPage
