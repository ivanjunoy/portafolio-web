import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MinimalResumeHome from './Components/MinimalResume/MinimalResumeHome';
import Blog from './Components/Blog/Blog';
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={MinimalResumeHome}/>
        <Route path='/proyectos' Component={Blog}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
