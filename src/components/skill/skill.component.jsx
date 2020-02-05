import React from "react";
import "./skill.styles.scss";

import gsap, { TimelineMax } from "gsap";

import ScrollMagic from "scrollmagic";
import { useRef } from "react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollMagic, TimelineMax);

const Skills = props => {
  const skillbar = useRef(null);
  const bar = [];

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const tl = new TimelineMax();
    const scene = new ScrollMagic.Scene({
      triggerElement: ".skills"
    });
    scene.setTween(tl);
    scene.addTo(controller);

    tl.from(skillbar.current, 2, {
      opacity: 0
    });

    tl.from(bar, 1, {
      opacity: 0,
      width: 0
    });
  });

  return (
    <div className="skills" ref={skillbar}>
      {props.skills.map(({ id, name, skill }, scene) => (
        <div className="skill" key={id}>
          <h3 className="skill_type">{name}</h3>
          <div className="skill__ouuter-bar">
            <div
              ref={el => (bar[scene] = el)}
              className={`skill__inner-bar skill__inner-bar--${skill}`}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
