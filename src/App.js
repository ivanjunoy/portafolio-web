import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MinimalResumeHome from './Components/MinimalResume/MinimalResumeHome';
import Welcome from './Components/Welcome/Welcome';
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import Learning from './Components/Learning/Learning';
import Games from './Components/Games/Games';
import NavigationHeader from './Components/NavigationHeader/NavigationHeader';

import './App.css';
import Closures from './Components/Learning/content/closures/Closures';
import SliderGrid from './Components/Games/SliderGrid/SliderGrid';
import Snake from './Components/Games/Snake/Snake';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' replace />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/resume' element={<MinimalResumeHome />} />
          <Route path='/proyectos' element={
            <>
              <NavigationHeader />
              <Project />
            </>
          } />
          <Route path='/blog' element={
            <>
              <NavigationHeader />
              <Blog />
            </>
          } />
          <Route path='/dashboard' element={
            <>
              <NavigationHeader />
              <Dashboard />
            </>
          } />
          <Route path='/learning' element={
            <>
              <NavigationHeader />
              <Learning />
            </>
          } />
          <Route path='/learning/closures' element={
            <>
              <NavigationHeader />
              <Closures />
            </>
          } />
          <Route path='/games' element={
            <>
              <NavigationHeader />
              <Games />
            </>
          } />
          <Route path='/games/slider-grid' element={
            <>
              <NavigationHeader />
              <SliderGrid />
            </>
          } />
          <Route path='/games/snake' element={
            <>
              <NavigationHeader />
              <Snake />
            </>
          } />
          <Route path='*' element={
            <>
              <NavigationHeader />
              <NotFound />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
