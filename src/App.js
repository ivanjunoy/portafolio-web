import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MinimalResumeHome from './Components/MinimalResume/MinimalResumeHome';
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import Learning from './Components/Learning/Learning';
import Games from './Components/Games/Games';
import NavigationHeader from './Components/NavigationHeader/NavigationHeader';

import './App.css';
import Closures from './Components/Learning/content/closures/Closures';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MinimalResumeHome />}/>
        <Route path='/proyectos' element={
          <>
            <NavigationHeader />
            <Project />
          </>
        }/>
        <Route path='/blog' element={
          <>
            <NavigationHeader />
            <Blog />
          </>
        }/>
        <Route path='/dashboard' element={
          <>
            <NavigationHeader />
            <Dashboard />
          </>
        }/>
        <Route path='/learning' element={
          <>
            <NavigationHeader />
            <Learning />
          </>
        }/>
        <Route path='/learning/closures' element={
          <>
            <NavigationHeader />
            <Closures />
          </>
        }/>
        <Route path='/games' element={
          <>
            <NavigationHeader />
            <Games />
          </>
        }/>
        <Route path='*' element={
          <>
            <NavigationHeader />
            <NotFound />
          </>
        }/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
