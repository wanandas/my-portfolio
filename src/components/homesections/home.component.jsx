import React from "react";

import gsap, { TimelineMax } from "gsap";
import "./home.styles.scss";
gsap.registerPlugin(TimelineMax);

class Homesection extends React.Component {
  constructor() {
    super();

    this.tl = new TimelineMax();
    this.header = null;
    this.span = null;
  }

  componentDidMount() {
    this.tl.fromTo(
      this.header,
      2,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1 }
    );

    this.tl.fromTo(
      this.span,
      1,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1 },
      "=-.9"
    );
  }

  render() {
    return (
      <div className="home-section" name="headerSection">
        <h1 ref={h1 => (this.header = h1)}>Hi, I'm Wantanawat Jitprakop</h1>
        <span ref={span => (this.span = span)}>
          looking for a position as Front-end Developer
        </span>
      </div>
    );
  }
}

export default Homesection;
