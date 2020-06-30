import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./project-card"

import "../styles/projects-section.css"

const ProjectsSection = ({ heading, description, client }) => {
  const currentProjects = useStaticQuery(graphql`
    query {
      allAirtable(filter: { table: { eq: "Projects" } }) {
        edges {
          node {
            data {
              Company
              Client
              Logo {
                url
              }
              Type
              Description
            }
          }
        }
      }
    }
  `)

  const showProjectCards = () => {
    const { edges } = currentProjects.allAirtable

    // This chain of functions does three things
    //   1. Filter out projects based on whether client or mentored
    //   2. Create a ProjectCard with the CMS info and wrap in a col
    //   3. Wrap every two columns in a row
    const projectCards = edges
      .filter(edge => !!edge.node.data.Client === client)
      .map(edge => {
        const { Logo, Type, Description, Company } = edge.node.data
        return (
          <div className="col">
            <ProjectCard
              logoUrl={Logo[0].url}
              projectType={Type}
              description={Description}
              altText={Company}
            />
          </div>
        )
      })
      .reduce((projectRow, _projectCol, i, projectCols) => {
        if (i % 2 === 0) {
          projectRow.push(
            <div className="row">{projectCols.slice(i, i + 2)}</div>
          )
        }
        return projectRow
      }, [])
    return projectCards
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="cb-projects-section">
            <h2 className="cb-projects-section-title">{heading}</h2>
            <p className="cb-projects-section-blurb">{description}</p>
          </div>
        </div>
      </div>
      {showProjectCards()}
    </div>
  )
}

ProjectsSection.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  client: PropTypes.bool,
}

export default ProjectsSection
