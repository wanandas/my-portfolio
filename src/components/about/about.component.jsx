import React from "react";

import "./about.styles.scss";
import Title from "../title/title.component";

const Aboutsection = () => {
  return (
    <div className="about-section" name="aboutSection">
      <Title title="about me" id="about" />
      <ul className="about-content">
        <li className="about-left">
          <img
            src="https://scontent.fbkk3-1.fna.fbcdn.net/v/t31.0-8/s960x960/14324523_1206769182718466_2462830630592720483_o.jpg?_nc_cat=101&_nc_eui2=AeHdj-Z81i-xTMBctcCG2Xxb3KZxVCIx9xzKMGHoTOK0RDWPhfVr5D--nf96uOex9eQlsBkBI9FOV5MnEEAIRxwunaG8fgjMJpMid07MCl34WQ&_nc_oc=AQlb5t_z_vxpbfDnGDIyQT4zgmG9omvKq576ei3MbGkejLfPFMwmbYN-GicYJ_2bnSY&_nc_ht=scontent.fbkk3-1.fna&oh=2d2219935aac5041a3bd10a5c86fc4aa&oe=5E75B86C"
            alt="pt"
          />
        </li>
        <li className="about-right">
          <h3>Mr.Wantanawat Jitprakop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ipsa nobis debitis facilis vel, tempora quod eveniet non, deserunt
            at, deleniti qui quidem delectus odio cupiditate repudiandae
            voluptas officiis porro.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Aboutsection;
