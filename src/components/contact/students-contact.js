import React from "react"
import Container from "react-bootstrap/Container"

import StudentFAQ from "../student-faq"

const StudentsContact = () => {
  return (
    <div>
      <Container>
        <iframe
          className="airtable-embed cb-airtable"
          src="https://airtable.com/embed/shrkGVms4bajWILBX?backgroundColor=purple"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          title="Student Contact Form"
        ></iframe>
      </Container>
      <StudentFAQ />
    </div>
  )
}

export default StudentsContact
