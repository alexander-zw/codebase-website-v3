import React from "react"
import Container from "react-bootstrap/Container"

import MemberList from "./member-list"
import { Exec, PMs } from "../../../constants"
import "../../../styles/member-panel.css"

const MemberPanel = () => {
  return (
    <div className="cb-wrapper-gray">
      <Container>
        <MemberList title={"Executive Team"} members={Exec}></MemberList>
        <MemberList title={"Project Managers"} members={PMs}></MemberList>
      </Container>
    </div>
  )
}

export default MemberPanel
