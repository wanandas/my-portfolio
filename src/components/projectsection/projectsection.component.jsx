import React from "react";

import "./projectsection.styles.scss";
import Projects from "../projects/projects.component";

class ProjectsSection extends React.Component {
  constructor() {
    super();

    this.state = {
      project: [
        {
          id: 1,
          name: "react&redux",
          img: "https://i.ibb.co/nM6SGrg/Untitled-2.jpg"
        },
        {
          id: 2,
          name: "Weather API",
          img: "https://i.ibb.co/zbM8qdg/Untitled-3.jpg"
        },
        {
          id: 3,
          name: "grid responsive",
          img: "https://i.ibb.co/gZpK0nG/Untitled-1.jpg"
        },
        {
          id: 4,
          name: "piano simple",
          img: "https://i.ibb.co/TPxTN37/Untitled-4.jpg"
        },
        {
          id: 5,
          name: "flex responsive",
          img: "https://i.ibb.co/KmRnNjG/Untitled-5.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="projects-Section" name="projectsSection">
        <hr></hr>
        <h2 className="title">My Project</h2>
        <div className="gallery">
          {this.state.project.map(({ id, img, name }) => (
            <Projects key={id} img={img} name={name} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
