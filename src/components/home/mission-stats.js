import React from "react";
import CountUp from 'react-countup';
import FadeInSection from '../fade-in-text.js'

import "../../styles/mission-stats.css"
import { Link } from "gatsby"

const MissionStats = () => {
  return (
    <div className="cb-mission-stats-bg">
      <div className="container">
        <div className="cb-mission-stats-m">
          <div className="row cb-mission-row">
          <div className="col-md-12">
            <h1 className="cb-mission-stats-title">
              <FadeInSection>
                OUR MISSION
              </FadeInSection>
            </h1>
            <div className="cb-mission">
              <p className="cb-mission-stats-description">
                <FadeInSection>
                  We are a software development club that strives to
                  build a community where passionate and driven engineers
                  can grow together through meaningful industry initiatives.
                </FadeInSection>
              </p>
            </div>
            <div className="cb-mission-stats-end">
              <Link
                className="cb-mission-stats-more"
                to="/about"
              >
                <FadeInSection>
                  Read more →
                </FadeInSection>
              </Link>
            </div>
            </div>
          </div>
        </div>
        <div className="cb-mission-stats-s">
          <div className="cb-stats">
            <div className="row cb-stats-row">
              <div className="col cb-stat">
                <FadeInSection>
                  <div className="cb-mission-stats-number"><CountUp start={0} end={5}/></div>
                  <div className="cb-mission-stats-text">projects every semester</div>
                </FadeInSection>
              </div>
              <div className="col cb-stat">
                <FadeInSection>
                  <div className="cb-mission-stats-number"><CountUp start={0} end={12} useEasing={true}/></div>
                  <div className="cb-mission-stats-text">weeks of agile development</div>
                </FadeInSection>
              </div>
              <div className="col cb-stat">
                <FadeInSection>
                  <div className="cb-mission-stats-number"><CountUp start={0} end={25} duration={2}/></div>
                  <div className="cb-mission-stats-text">completed projects and counting</div>
                </FadeInSection>
              </div>
              <div className="col cb-stat">
                <FadeInSection>
                  <div className="cb-mission-stats-number"><CountUp start={0} end={46}/></div>
                  <div className="cb-mission-stats-text">active members and over 100 alumni</div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionStats
