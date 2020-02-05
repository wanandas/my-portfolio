import React from "react";
import "./App.css";

import Homesection from "./components/homesections/home.component";
import Header from "./components/header/header.component";
import Aboutsection from "./components/about/about.component";
import SkillsSection from "./components/skillsSection/skillsSection.component";
import ProjectsSection from "./components/projectsection/projectsection.component";
import FooterSection from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Homesection />
      <Aboutsection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
};

export default App;
