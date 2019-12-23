import React from "react";
import "./App.css";

import Homesection from "./components/homesections/home.components";
import Header from "./components/header/header.component";
import Aboutsection from "./components/about/about.component";
import SkillsSection from "./components/skills/skills.component";
import ProjectsSection from "./components/project/project.component";
import FooterSection from "./components/footer/footer.component";

function App() {
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
}

export default App;
