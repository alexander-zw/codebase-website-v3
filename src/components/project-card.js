import React from "react"
import PropTypes from "prop-types"

import "../styles/project-card.css"

const ProjectCard = ({ logoUrl, projectType, description, altText }) => {
  return (
    <div className="col-md-6 col-sm-12 cb-project-col">
      <div className="card cb-project-card">
        <div className="card-body cb-project-card-body">
          <img className="cb-project-logo" src={logoUrl} alt={altText}></img>
          <div className="cb-project-type">
            <b>{projectType}</b>
          </div>
          <p className="cb-project-text">{description}</p>
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  logoUrl: PropTypes.string,
  projectType: PropTypes.string,
  description: PropTypes.string,
  altText: PropTypes.string,
}

export default ProjectCard
