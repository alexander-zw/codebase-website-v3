import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import studentIcon from "../../images/icons/student-icon.png"
import companyIcon from "../../images/icons/company-icon.png"
import "../../styles/general-contact.css"
import "../../styles/dual-cards.css"

const GeneralContact = () => {
  return (
    <div className="cb-wrapper-white">
      <Container>
        <h2 className="cb-section-heading cb-general-contact-heading">
          Contact Us
        </h2>

        <Row>
          <Col md={6} className="cb-dual-cards-col">
            <div className="cb-dual-cards-card">
              <div className="cb-dual-card-content">
                <img
                  src={studentIcon}
                  height="40"
                  alt=""
                  className="cb-general-contact-icon"
                />
                <h2 className="cb-general-contact-card-title">
                  For Companies and NPOs
                </h2>
                <p className="cb-general-contact-card-text">
                  We are looking for companies and non-profits with exciting
                  projects to work with. If you have a project for us, please
                  reach out!
                </p>
                <div className="cb-general-contact-button-container">
                  <Link className="cb-general-contact-button" to="clients">
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="cb-dual-cards-col">
            <div className="cb-dual-cards-card">
              <div className="cb-dual-card-content">
                <img
                  src={companyIcon}
                  height="40"
                  alt=""
                  className="cb-general-contact-icon"
                />
                <h2 className="cb-general-contact-card-title">For Students</h2>
                <p className="cb-general-contact-card-text">
                  We are looking for students who have a hunger for learning and
                  a passion for tech. Interested? Join our team!
                </p>
                <div className="cb-general-contact-button-container">
                  <Link className="cb-general-contact-button" to="students">
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GeneralContact
