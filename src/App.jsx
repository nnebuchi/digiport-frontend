import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Log from "./pages/Log";
import Home from './pages/Home';
import Sign from './pages/Sign';
import Forgot from './pages/Forgot';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Bio from './pages/Bio';
import Social from './pages/Social';
import Insight from './pages/Insight';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/log" element={<Log/>} />
             <Route path="sign" element={<Sign/>} />
             <Route path="forgot" element={<Forgot/>} />
             <Route path="dash" element={<Dashboard/>} />
             <Route path="profile" element={<Profile/>} />
             <Route path="bio" element={<Bio/>} />
             <Route path="social" element={<Social/>} />
             <Route path="insight" element={<Insight/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
