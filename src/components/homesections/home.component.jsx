import React from "react";

import { TimelineMax } from "gsap";
import "./home.styles.scss";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TimelineMax);

class Homesection extends React.Component {
  constructor() {
    super();
    this.controller = new ScrollMagic.Controller();

    this.tl = new TimelineMax();
    this.header = null;
    this.span = null;
  }

  componentDidMount() {
    const scene = new ScrollMagic.Scene({
      triggerElement: "#header"
    })
      .setTween(this.tl)
      .addTo(this.controller);

    this.tl.fromTo(
      this.header,
      1,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    this.tl.fromTo(
      this.span,
      1,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1 },
      "=-.7"
    );
  }

  render() {
    return (
      <div className="home-section" name="headerSection">
        <h1 ref={h1 => (this.header = h1)} id="header">
          Hi, I'm Wantanawat Jitprakop
        </h1>
        <span ref={span => (this.span = span)}>looking for job</span>
      </div>
    );
  }
}

export default Homesection;
