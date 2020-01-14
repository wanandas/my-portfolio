import React from "react";

import "./skillsSection.styles.scss";
import Title from "../title/title.component";
import Skills from "../skill/skill.component";
import { createStructuredSelector } from "reselect";
import { selectSkillsList } from "../../redux/skill/skill.selectors";
import { connect } from "react-redux";

const SkillsSection = ({ skills }) => (
  <div className="skills-section" name="skillsSection">
    <hr></hr>
    <Title title="my skills" id="about" />
    <div className="skills-container">
      <Skills skills={skills} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({ skills: selectSkillsList });

export default connect(mapStateToProps)(SkillsSection);
