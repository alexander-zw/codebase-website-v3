import React from "react"

import "../../../styles/base-behaviors.css"
import { BaseBehavior } from "../../../constants"

const BaseBehaviorsDescriptions = ({ baseBehavior }) => {
  const getText = baseBehavior => {
    switch (baseBehavior) {
      case BaseBehavior.OWNERSHIP:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-bb-subtitle">Actively Take Ownership</h2>
            <p className="cb-bb-description">
              We encourage taking initiatives and strive to produce work we are
              exceptionally proud of.
            </p>
          </div>
        )
      case BaseBehavior.COMMUNICATE:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-bb-subtitle">Communicate Candidly</h2>
            <p className="cb-bb-description">
              We believe that open, honest conversations lead to a more
              effective learning experience.
            </p>
          </div>
        )
      case BaseBehavior.GIVE:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-bb-subtitle">Genuinely Give Back</h2>
            <p className="cb-bb-description">
              We are grateful for the opportunities we have been given and
              strongly value paying it forward.
            </p>
          </div>
        )
      case BaseBehavior.PEOPLE:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-bb-subtitle">Put People First</h2>
            <p className="cb-bb-description">
              We care about the community we’re all part of and value treating
              our peers with respect and trust.
            </p>
          </div>
        )
      case BaseBehavior.GROWTH:
        return (
          <div className="cb-bb-textbox">
            <h2 className="cb-bb-subtitle">Seek Continuous Growth</h2>
            <p className="cb-bb-description">
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
