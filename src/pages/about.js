import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../constants"
import Member from "../components/member"
import { exec } from "../memberInfo.js"
import "../styles/about.css"

const AboutPage = ({ location }) => {
  return (
    <Layout theme={Theme.DEFAULT}>
      <SEO title="About" />

      <div className="member-container">
        <h1>Executive Team</h1>

        <div className="member-group">
          {exec.map(element => {
            return (
              <Member
                name={element.name}
                title={element.position}
                src={element.src}
              ></Member>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
