import React from "react"
import Container from "react-bootstrap/Container"

import ClientFAQ from "../client-faq"

const ClientsContact = () => {
  return (
    <div>
      <Container>
        <iframe
          className="airtable-embed cb-airtable"
          src="https://airtable.com/embed/shr6ada5aT3pAMJ5C?backgroundColor=purple"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          title="Client Contact Form"
        ></iframe>
      </Container>
      <ClientFAQ />
    </div>
  )
}

export default ClientsContact
