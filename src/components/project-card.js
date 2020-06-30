import React from "react"
import PropTypes from "prop-types"

import "../styles/project-card.css"

const ProjectCard = ({ logoUrl, projectType, description, altText }) => {
  return (
    <div className="card cb-project-card">
      <div className="card-body">
        <img className="cb-project-logo" src={logoUrl} alt={altText}></img>
        <p className="cb-project-type">
          <b>{projectType}</b>
        </p>
        <p className="cb-project-text">{description}</p>
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
