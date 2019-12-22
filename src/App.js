import React from "react";
import "./App.css";

import Homesection from "./components/homesections/home.components";
import Header from "./components/header/header.component";
import Aboutsection from "./components/about/about.component";
import SkillsSection from "./components/skills/skills.component";
import Projectsection from "./components/project/project.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Homesection />
      <Aboutsection />
      <SkillsSection />
    </div>
  );
}

export default App;
