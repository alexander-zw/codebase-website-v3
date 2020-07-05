import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../constants"
import { Exec } from "../constants"
import "../styles/about.css"
import MemberList from "../components/member-list"

const AboutPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="About" />
	  
	  <div className="page-container">
		<div className="container">
			<MemberList members={Exec}></MemberList>
		</div>
	  </div>
	  
	  
    </Layout>
  )
}

export default AboutPage
