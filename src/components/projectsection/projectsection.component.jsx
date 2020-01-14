import React from "react";

import "./projectsection.styles.scss";
import Projects from "../projects/projects.component";
import Title from "../title/title.component";
import { connect } from "react-redux";
import { selectProjects } from "../../redux/projects/projects.selector";
import { createStructuredSelector } from "reselect";

const ProjectsSection = ({ project }) => (
  <div className="projects-Section" name="projectsSection">
    <hr></hr>
    <Title title="My Project" />
    <div className="gallery">
      {project.map(({ id, ...otherprops }) => (
        <Projects key={id} {...otherprops} />
      ))}
    </div>
  </div>
);

const mapStatetoProps = createStructuredSelector({
  project: selectProjects
});

export default connect(mapStatetoProps)(ProjectsSection);
