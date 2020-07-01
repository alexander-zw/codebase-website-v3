import React from "react"
import PropTypes from "prop-types"
import Col from "react-bootstrap/col"

import "../styles/project-card.css"

const ProjectCard = ({
  logoUrl,
  projectType,
  description,
  hyperlink,
  altText,
}) => {
  return (
    <Col md={6} sm={12} className="cb-project-col">
      <div className="card cb-project-card">
        <div className="card-body cb-project-card-body">
          <a href={hyperlink}>
            <img className="cb-project-logo" src={logoUrl} alt={altText}></img>
          </a>
          <div className="cb-project-type">
            <b>{projectType}</b>
          </div>
          <p className="cb-project-text">{description}</p>
        </div>
      </div>
    </Col>
  )
}

ProjectCard.propTypes = {
  logoUrl: PropTypes.string,
  projectType: PropTypes.string,
  description: PropTypes.string,
  altText: PropTypes.string,
}

export default ProjectCard
