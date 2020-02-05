import React, { useEffect, useRef } from "react";

import "./about.styles.scss";
import Title from "../title/title.component";

import gsap, { TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";

gsap.registerPlugin(ScrollMagic, TimelineMax);

const Aboutsection = () => {
  const aniP1 = useRef(null);
  const aniP2 = useRef(null);
  const aniName = useRef(null);
  const aniPic = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const tl = new TimelineMax();
    const scene = new ScrollMagic.Scene({
      triggerElement: ".about-content"
    });
    scene.setTween(tl);
    scene.addTo(controller);

    tl.from(aniName.current, 2, { y: -200, opacity: 0, ease: "back" });
    tl.from(aniP1.current, 2, { x: 200, opacity: 0, ease: "back" }, ".5");
    tl.from(aniP2.current, 2, { y: 200, opacity: 0, ease: "back" }, ".5");
    tl.from(aniPic.current, 2, { opacity: 0 }, ".8");
  });

  return (
    <div className="about-section" name="aboutSection">
      <Title title="about me" id="about" />
      <ul className="about-content">
        <li className="about-left">
          <img
            ref={aniPic}
            src="https://scontent.fbkk3-1.fna.fbcdn.net/v/t31.0-8/s960x960/14324523_1206769182718466_2462830630592720483_o.jpg?_nc_cat=101&_nc_eui2=AeHdj-Z81i-xTMBctcCG2Xxb3KZxVCIx9xzKMGHoTOK0RDWPhfVr5D--nf96uOex9eQlsBkBI9FOV5MnEEAIRxwunaG8fgjMJpMid07MCl34WQ&_nc_oc=AQlb5t_z_vxpbfDnGDIyQT4zgmG9omvKq576ei3MbGkejLfPFMwmbYN-GicYJ_2bnSY&_nc_ht=scontent.fbkk3-1.fna&oh=2d2219935aac5041a3bd10a5c86fc4aa&oe=5E75B86C"
            alt="pt"
          />
        </li>
        <li className="about-right">
          <h3 ref={aniName}>Mr.Wantanawat Jitprakop</h3>
          <p ref={aniP1}>
            Hello I'm Once , I graduated from Chandrakasem Rajabhat University
            <br></br>majoring in faculty of management science (Business
            Computer).
          </p>
          <p ref={aniP2}>
            In my spare time, I enjoy playing Computer Game such as Dota2 ,
            <br></br>
            Tom Clancy's Rainbow Six Siege
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Aboutsection;
