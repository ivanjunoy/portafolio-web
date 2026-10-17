import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MinimalResumeHome from './Components/MinimalResume/MinimalResumeHome';
import Welcome from './Components/Welcome/Welcome';
import Project from './Components/Project/Project';
import Blog from './Components/Blog/Blog';
import Posts from './Components/Blog/Posts/Posts';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';
import Learning from './Components/Learning/Learning';
import Games from './Components/Games/Games';
import NavigationHeader from './Components/NavigationHeader/NavigationHeader';

import './App.css';
import Closures from './Components/Learning/content/closures/Closures';
import EventLoop from './Components/Learning/content/event-loop/EventLoop';
import SliderGrid from './Components/Project/SliderGrid/SliderGrid';
import Snake from './Components/Games/Snake/Snake';
import LoginLab from './Components/Project/LoginLab/LoginLab';
import PortfolioLayout from './Components/PortfolioLayout/PortfolioLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' replace />} />
          <Route path='/resume' element={<MinimalResumeHome />} />
          <Route element={<PortfolioLayout />}>
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/proyectos' element={<Project />} />
            <Route path='/proyectos/slider-grid' element={<SliderGrid />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/reflexion' element={<Posts />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/learning' element={<Learning />} />
            <Route path='/learning/closures' element={<Closures />} />
            <Route path='/learning/event-loop' element={<EventLoop />} />
            <Route path='/games' element={<Games />} />
            <Route path='/games/snake' element={<Snake />} />
          </Route>
          <Route path='/games/slider-grid' element={<Navigate to='/proyectos/slider-grid' replace />} />
          <Route path='/proyectos/login' element={<LoginLab />} />
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
