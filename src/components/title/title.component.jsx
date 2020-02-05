import React, { useEffect, useRef } from "react";
import "./title.styles.scss";

import gsap, { TimelineMax } from "gsap";

import ScrollMagic from "scrollmagic";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
gsap.registerPlugin(ScrollMagic, TimelineMax);

const Title = props => {
  const aniH2 = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
      triggerElement: aniH2.current
    });
    scene.setTween(tl);
    scene.addTo(controller);

    tl.from(aniH2.current, 2, {
      opacity: 0,
      color: "#80ff00",
      ease: "Bounce.easeOut"
    });
  });

  return (
    <h2 className="title" ref={aniH2}>
      {props.title}
    </h2>
  );
};

export default Title;
