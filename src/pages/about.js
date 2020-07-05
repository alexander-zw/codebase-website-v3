import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Exec, Theme } from "../constants"
import MemberList from "../components/member-list"
import BaseBehaviors from "../components/about/base-behaviors/base-behaviors"
import "../styles/about.css"


const AboutPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="About" />
	   
    <BaseBehaviors />

	  <div className="page-container">
		<div className="container">
			<MemberList members={Exec}></MemberList>
		</div>
	  </div>
	  
	  
    </Layout>
  )
}

export default AboutPage
