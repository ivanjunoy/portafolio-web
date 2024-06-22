import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Resume from './Components/Resume/Resume';
import Experience from './Components/Experience/Experience';
import Formation from './Components/Formation/Formation';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Resume />
      <div className='containerGrid'>
        <div>
          <Experience  />
        </div>
        <div>
          <Formation  />  
        </div>
      </div>
      <hr />
      <Skills />
      <div className='containerGrid'>
        <div>
          <Contact />
        </div>
        <div>
          <Projects />
        </div>
      </div>
      <hr />
    </>
  );
}

export default App;
