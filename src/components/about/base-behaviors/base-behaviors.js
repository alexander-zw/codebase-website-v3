import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import ReactCSSTransitionReplace from "react-css-transition-replace"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

import BaseBehaviorsDescriptions from "./base-behaviors-descriptions"
import BaseBehaviorsImages from "./base-behaviors-images"
import BaseBehaviorsClub from "./base-behaviors-club"
import { BaseBehavior } from "../../../constants"
import "../../../styles/base-behaviors.css"

class BaseBehaviors extends React.Component {
  bbList = [
    BaseBehavior.PEOPLE,
    BaseBehavior.OWNERSHIP,
    BaseBehavior.GROWTH,
    BaseBehavior.COMMUNICATE,
    BaseBehavior.GIVE,
  ]

  constructor(props) {
    super(props)
    this.state = {
      bbIndex: 0,
    }
  }

  nextBB = () => {
    let nextBBIndex = this.state.bbIndex + 1
    if (this.state.bbIndex === this.bbList.length - 1) {
      nextBBIndex = 0
    }
    this.setState({ bbIndex: nextBBIndex })
  }

  prevBB = () => {
    let prevBBIndex = this.state.bbIndex - 1
    if (this.state.bbIndex === 0) {
      prevBBIndex = this.bbList.length - 1
    }
    this.setState({ bbIndex: prevBBIndex })
  }

  setBBIndex = bbIndex => {
    this.setState({ bbIndex: bbIndex })
  }

  getCaptionClass = bbIndex => {
    return bbIndex === this.state.bbIndex ? "cb-bb-active-caption" : ""
  }

  render() {
    return (
      <div className="cb-wrapper-white">
        <Container>
          <Row className="cb-bb-carousel-row">
            <Col md={6}>
              <h1 className="cb-section-title cb-bb-title">
                OUR BASE BEHAVIORS
              </h1>
              <ReactCSSTransitionReplace
                transitionName="cb-bb-cross-fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                <BaseBehaviorsDescriptions
                  key={this.state.bbIndex}
                  baseBehavior={this.bbList[this.state.bbIndex]}
                />
              </ReactCSSTransitionReplace>
            </Col>
            <Col md={6}>
              <ReactCSSTransitionReplace
                transitionName="cb-bb-cross-fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
                <BaseBehaviorsImages
                  key={this.state.bbIndex}
                  baseBehavior={this.bbList[this.state.bbIndex]}
                />
              </ReactCSSTransitionReplace>
            </Col>
          </Row>
          <Row className="cb-bb-arrow-row">
            <Col md={6}>
              <IoIosArrowBack
                onClick={this.prevBB}
                size="2em"
                className="cb-bb-left-arrow"
              />
              <IoIosArrowForward
                onClick={this.nextBB}
                size="2em"
                className="cb-bb-right-arrow"
              />
            </Col>
          </Row>
          <Row className="cb-bb-caption-row">
            <Col
              className={`cb-bb-caption ${this.getCaptionClass(0)}`}
              onClick={() => this.setBBIndex(0)}
              onKeyDown={() => this.setBBIndex(0)}
              role="button"
              tabIndex={0}
            >
              <div className="cb-bb-number">01&#13;&#10;</div>
              <div className="cb-bb-text cb-bb-people">Put People First</div>
            </Col>
            <Col
              className={`cb-bb-caption ${this.getCaptionClass(1)}`}
              onClick={() => this.setBBIndex(1)}
              onKeyDown={() => this.setBBIndex(1)}
              role="button"
              tabIndex={0}
            >
              <div className="cb-bb-number">02&#13;&#10;</div>
              <div className="cb-bb-text">Actively Take Ownership</div>
            </Col>
            <Col
              className={`cb-bb-caption ${this.getCaptionClass(2)}`}
              onClick={() => this.setBBIndex(2)}
              onKeyDown={() => this.setBBIndex(2)}
              role="button"
              tabIndex={0}
            >
              <div className="cb-bb-number">03&#13;&#10;</div>
              <div className="cb-bb-text">Seek Continuous Growth</div>
            </Col>
            <Col
              className={`cb-bb-caption ${this.getCaptionClass(3)}`}
              onClick={() => this.setBBIndex(3)}
              onKeyDown={() => this.setBBIndex(3)}
              role="button"
              tabIndex={0}
            >
              <div className="cb-bb-number">04&#13;&#10;</div>
              <div className="cb-bb-text">Communicate Candidly</div>
            </Col>
            <Col
              className={`cb-bb-caption ${this.getCaptionClass(4)}`}
              onClick={() => this.setBBIndex(4)}
              onKeyDown={() => this.setBBIndex(4)}
              role="button"
              tabIndex={0}
            >
              <div className="cb-bb-number">05&#13;&#10;</div>
              <div className="cb-bb-text">Genuinely Give Back</div>
            </Col>
          </Row>
          <Row className="cb-bb-image-row" id="team">
            <Col md={12}>
              <BaseBehaviorsClub />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default BaseBehaviors
