import React from "react";
import "./skill.styles.scss";

import gsap, { TimelineMax } from "gsap";

import ScrollMagic from "scrollmagic";

gsap.registerPlugin(ScrollMagic, TimelineMax);

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.controller = new ScrollMagic.Controller();
    this.tl = new TimelineMax();

    this.bar = [];
    this.skillbar = null;
  }

  componentDidMount() {
    const scene = new ScrollMagic.Scene({
      triggerElement: ".skills"
    });
    scene.setTween(this.tl);
    scene.addTo(this.controller);

    this.tl.from(this.skillbar, 2, {
      opacity: 0
    });

    this.tl.from(this.bar, 1, {
      opacity: 0,
      width: 0
    });
    console.log(this.bar);
  }

  render() {
    return (
      <div className="skills" ref={skillbar => (this.skillbar = skillbar)}>
        {this.props.skills.map(({ id, name, skill }, scene) => (
          <div className="skill" key={id}>
            <h3 className="skill_type">{name}</h3>
            <div className="skill__ouuter-bar">
              <div
                ref={el => (this.bar[scene] = el)}
                className={`skill__inner-bar skill__inner-bar--${skill}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Skills;
