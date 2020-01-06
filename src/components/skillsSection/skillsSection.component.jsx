import React from "react";

import "./skillsSection.styles.scss";
import Title from "../title/title.component";
import Skills from "../skill/skill.component";

class SkillsSection extends React.Component {
  constructor() {
    super();

    this.state = {
      skills: [
        {
          id: 1,
          name: "HTML",
          skill: 50
        },
        {
          id: 2,
          name: "CSS",
          skill: 45
        },
        {
          id: 3,
          name: "JS",
          skill: 40
        },
        {
          id: 4,
          name: "REACT&REDUX",
          skill: 30
        }
      ]
    };
  }

  render() {
    return (
      <div className="skills-section" name="skillsSection">
        <hr></hr>
        <Title title="my skills" id="about" />
        <div className="skills-container">
          <Skills skills={this.state.skills} />
        </div>
      </div>
    );
  }
}
export default SkillsSection;
