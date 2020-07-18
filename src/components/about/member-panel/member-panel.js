import React from "react"
import { Exec, PMs } from "../../../constants"
import "../../../styles/member-panel.css"
import MemberList from "./member-list"
import Container from "react-bootstrap/Container"

const MemberPanel = () => {
  return (
    <div className="cb-member-page-container">
      <Container>
        <MemberList title={"Executive Team"} members={Exec}></MemberList>
        <MemberList title={"Project Managers"} members={PMs}></MemberList>
      </Container>
    </div>
  )
}

export default MemberPanel
