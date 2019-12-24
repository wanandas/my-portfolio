import React from "react";

import "./project.styles.scss";

const ProjectsSection = () => (
  <div className="projects-Section" name="projectsSection">
    <hr></hr>
    <h2 className="title">My Project</h2>
    <div className="gallery">
      <div className="project">
        <img src="https://i.ibb.co/nM6SGrg/Untitled-2.jpg" alt="" />
        <div className="project-name">react&redux</div>
      </div>
      <div className="project">
        <img src="https://i.ibb.co/zbM8qdg/Untitled-3.jpg" alt="" />
        <div className="project-name">Weather API</div>
      </div>
      <div className="project">
        <img src="https://i.ibb.co/gZpK0nG/Untitled-1.jpg" alt="" />
        <div className="project-name">grid responsive</div>
      </div>

      <div className="project">
        <img src="https://i.ibb.co/TPxTN37/Untitled-4.jpg" alt="" />
        <div className="project-name">piano simple</div>
      </div>
      <div className="project">
        <img src="https://i.ibb.co/KmRnNjG/Untitled-5.jpg" alt="" />
        <div className="project-name">flex responsive</div>
      </div>
    </div>
  </div>
);

export default ProjectsSection;
