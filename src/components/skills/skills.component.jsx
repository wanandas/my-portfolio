import React from "react";

import "./skills.styles.scss";

const SkillsSection = () => (
  <div className="skills-section" name="skillsSection">
    <hr></hr>
    <h2 className="title">My Skill</h2>
    <div className="skills-container">
      <div className="skills">
        <div className="skill">
          <h3 className="skill_type">HTML</h3>
          <div className="skill__ouuter-bar">
            <div className="skill__inner-bar skill__inner-bar--50"></div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill_type">CSS</h3>
          <div className="skill__ouuter-bar">
            <div className="skill__inner-bar skill__inner-bar--45"></div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill_type">JS</h3>
          <div className="skill__ouuter-bar">
            <div className="skill__inner-bar skill__inner-bar--40"></div>
          </div>
        </div>
        <div className="skill">
          <h3 className="skill_type">REACT&REDUX</h3>
          <div className="skill__ouuter-bar">
            <div className="skill__inner-bar skill__inner-bar--30"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SkillsSection;
