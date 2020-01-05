import React from "react";
import "./title.styles.scss";

import gsap, { TimelineMax } from "gsap";

import ScrollMagic from "scrollmagic";

import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
gsap.registerPlugin(ScrollMagic, TimelineMax);

class Title extends React.Component {
  constructor() {
    super();

    this.controller = new ScrollMagic.Controller();
    this.tl = new TimelineMax();

    this.h2 = null;
  }

  componentDidMount() {
    const scene = new ScrollMagic.Scene({
      triggerElement: this.h2
    });
    scene.setTween(this.tl);
    scene.addTo(this.controller);

    this.tl.from(this.h2, 2, {
      opacity: 0,
      color: "#80ff00",
      ease: "Bounce.easeOut"
    });
  }

  render() {
    return (
      <h2 className="title" ref={id => (this.h2 = id)}>
        {this.props.title}
      </h2>
    );
  }
}

export default Title;
