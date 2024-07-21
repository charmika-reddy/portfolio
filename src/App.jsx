import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Projects from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
        <NavBar/>
        <Intro/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
