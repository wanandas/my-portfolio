import React, { useRef, useEffect } from "react";

import gsap, { TweenMax } from "gsap";
import "./home.styles.scss";
gsap.registerPlugin(TweenMax);

const Homesection = () => {
  const aniHeader = useRef(null);
  const aniSpan = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      aniHeader.current,
      2,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    TweenMax.fromTo(
      aniSpan.current,
      1,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1 },
      "=-.9"
    );
  }, []);

  return (
    <div className="home-section" name="headerSection">
      <h1 ref={aniHeader}>Hi, I'm Wantanawat Jitprakop</h1>
      <span ref={aniSpan}>looking for a position as Front-end Developer</span>
    </div>
  );
};

export default Homesection;
