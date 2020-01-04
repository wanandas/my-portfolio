import React from "react";

import "./about.styles.scss";
import Title from "../title/title.component";

import gsap, { TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TimelineMax);
gsap.registerPlugin(ScrollMagic, TimelineMax);

class Aboutsection extends React.Component {
  constructor() {
    super();

    this.controller = new ScrollMagic.Controller();

    this.tl = new TimelineMax();

    this.p1 = null;
    this.p2 = null;
    this.name = null;

    this.pic = null;
  }

  componentDidMount() {
    const scene = new ScrollMagic.Scene({
      triggerElement: ".about-content"
    })
      .setTween(this.tl)
      .addTo(this.controller);

    this.tl.from(this.name, 2, { y: -200, opacity: 0, ease: "back" });
    this.tl.from(this.p1, 2, { x: 200, opacity: 0, ease: "back" }, ".5");
    this.tl.from(this.p2, 2, { y: 200, opacity: 0, ease: "back" }, ".5");
    this.tl.from(this.pic, 2, { opacity: 0 }, ".8");
  }

  render() {
    return (
      <div className="about-section" name="aboutSection">
        <Title title="about me" id="about" />
        <ul className="about-content">
          <li className="about-left">
            <img
              ref={img => (this.pic = img)}
              src="https://scontent.fbkk3-1.fna.fbcdn.net/v/t31.0-8/s960x960/14324523_1206769182718466_2462830630592720483_o.jpg?_nc_cat=101&_nc_eui2=AeHdj-Z81i-xTMBctcCG2Xxb3KZxVCIx9xzKMGHoTOK0RDWPhfVr5D--nf96uOex9eQlsBkBI9FOV5MnEEAIRxwunaG8fgjMJpMid07MCl34WQ&_nc_oc=AQlb5t_z_vxpbfDnGDIyQT4zgmG9omvKq576ei3MbGkejLfPFMwmbYN-GicYJ_2bnSY&_nc_ht=scontent.fbkk3-1.fna&oh=2d2219935aac5041a3bd10a5c86fc4aa&oe=5E75B86C"
              alt="pt"
            />
          </li>
          <li className="about-right">
            <h3 ref={h3 => (this.name = h3)}>Mr.Wantanawat Jitprakop</h3>
            <p ref={p => (this.p1 = p)}>
              Hello I'm Once , I graduated from Chandrakasem Rajabhat
              University, majoring in faculty of management science (Business
              Computer).
            </p>
            <p ref={p => (this.p2 = p)}>
              In my spare time, I enjoy playing Computer Game such as Dota2 ,
              Tom Clancy's Rainbow Six Siege
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Aboutsection;
