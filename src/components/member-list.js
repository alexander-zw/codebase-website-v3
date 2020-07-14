import React from "react"
import Layout from "../components/layout"
import Member from "../components/member"
import "../styles/member-list.css"

const MemberList = ({ members, title }) => {
  return (
    <div className="member-container">
      <h1>{title}</h1>

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
