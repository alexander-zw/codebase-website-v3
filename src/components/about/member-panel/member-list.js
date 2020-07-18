import React from "react"
import Member from "./member"
import "../../../styles/member-panel.css"

const MemberPanel = ({ members, title }) => {
  return (
    <div className="cb-member-container">
      <h1>{title}</h1>

      <div className="cb-member-group">
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

export default MemberPanel
