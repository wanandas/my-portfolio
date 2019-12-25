import React from "react";

import "./skillsSection.styles.scss";

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
        <h2 className="title">My Skill</h2>
        <div className="skills-container">
          <div className="skills">
            {this.state.skills.map(({ id, name, skill }) => (
              <div className="skill" key={id}>
                <h3 className="skill_type">{name}</h3>
                <div className="skill__ouuter-bar">
                  <div
                    className={`skill__inner-bar skill__inner-bar--${skill}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default SkillsSection;
