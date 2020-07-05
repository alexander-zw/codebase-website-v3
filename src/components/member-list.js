import React from "react"
import Layout from "../components/layout"
import Member from "../components/member"
import "../styles/about.css"

const MemberList = ({ members }) => {
  return (
    <div className="member-container">
      <h1>Executive Team</h1>

      <div className="member-group">
        {members.map(element => {
          return (
            <Member
			  key={element.name}
              name={element.name}
              title={element.position}
              src={element.src}
            ></Member>
          )
        })}
      </div>
    </div>
  )
}

export default MemberList
