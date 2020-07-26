import React from "react"

import { BaseBehavior } from "../../../constants"
import "../../../styles/base-behaviors.css"

const BaseBehaviorsDescriptions = ({ baseBehavior }) => {
  const getText = baseBehavior => {
    switch (baseBehavior) {
      case BaseBehavior.OWNERSHIP:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-section-heading">Actively Take Ownership</h2>
            <p className="cb-section-text">
              We encourage taking initiatives and strive to produce work we are
              exceptionally proud of.
            </p>
          </div>
        )
      case BaseBehavior.COMMUNICATE:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-section-heading">Communicate Candidly</h2>
            <p className="cb-section-text">
              We believe that open, honest conversations lead to a more
              effective learning experience.
            </p>
          </div>
        )
      case BaseBehavior.GIVE:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-section-heading">Genuinely Give Back</h2>
            <p className="cb-section-text">
              We are grateful for the opportunities we have been given and
              strongly value paying it forward.
            </p>
          </div>
        )
      case BaseBehavior.PEOPLE:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-section-heading">Put People First</h2>
            <p className="cb-section-text">
              We care about the community we’re all part of and value treating
              our peers with respect and trust.
            </p>
          </div>
        )
      case BaseBehavior.GROWTH:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-section-heading">Seek Continuous Growth</h2>
            <p className="cb-section-text">
              We think about our personal growth, always remain curious, and
              approach problems with an open-mind.
            </p>
          </div>
        )
      default:
        return
    }
  }

  return getText(baseBehavior)
}

export default BaseBehaviorsDescriptions
