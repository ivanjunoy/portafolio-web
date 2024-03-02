import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';
import Experience from './Components/Experience/Experience';
import Formation from './Components/Formation/Formation';
import Skills from './Components/Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Resume />
      <Experience />
      <Formation />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
