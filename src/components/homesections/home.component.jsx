import React from "react";

import { TimelineMax } from "gsap";
import "./home.styles.scss";
import ScrollMagic from "scrollmagic";
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";

class Homesection extends React.Component {
  constructor() {
    super();
    this.controller = new ScrollMagic.Controller();

    this.tl = new TimelineMax();
    this.head = null;
    this.span = null;
  }

  componentDidMount() {
    this.tl.from(this.head, 1, { x: -200, opacity: 0 });
    this.tl.from(this.span, 1, { x: 200, opacity: 0 }, "=-.5");

    const scene = new ScrollMagic.Scene({
      triggerElement: "#head"
    })
      .setTween(this.tl)
      .addTo(this.controller);
  }

  render() {
    return (
      <div className="home-section" name="headerSection">
        <h1 ref={h1 => (this.head = h1)}>Hi, I'm Wantanawat Jitprakop</h1>
        <span ref={span => (this.span = span)}>looking for job</span>
      </div>
    );
  }
}

export default Homesection;
