import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Theme } from "../constants"

import StudentsContact from "../components/contact/students-contact"

const StudentsPage = ({ location }) => {
  return (
    <Layout theme={Theme.LIGHT}>
      <SEO title="Students" />
      <StudentsContact />
    </Layout>
  )
}

export default StudentsPage
