import React from "react";

import "./projects.styles.scss";

const Projects = props => (
  <div className="project" key={props.id}>
    <a href={props.url}>
      <img src={props.img} alt="" />
    </a>
    <div className="project-name">{props.name}</div>
  </div>
);

export default Projects;
