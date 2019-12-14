import React from 'react';
import './App.css';
import Homesection from './components/homesections/home.components';
import Header from './components/header/header.component'
import Aboutsection from './components/about/about.component';


function App() {
  return (
    <div className="App">
    
      <Homesection  />
      <Header />
      <Aboutsection />
      
    
    </div>
  );
}

export default App;
