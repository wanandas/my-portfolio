import React from "react";

import "./projects.styles.scss";

const Projects = props => (
  <div className="project" key={props.id}>
    <img src={props.img} alt="" />
    <div className="project-name">{props.name}</div>
  </div>
);

export default Projects;
