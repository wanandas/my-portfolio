import React from "react";

import "./about.styles.scss";

const Aboutsection = () => {
  return (
    <div className="about-section" name="aboutSection">
      <h2 className="section-title">About ME</h2>
      <ul className="about-content">
        <li className="about-left"></li>
        <li className="about-right">
          <h3>MR.Wantanawat Jitprakop</h3>
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
