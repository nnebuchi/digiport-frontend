import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Log from "./pages/Log";
import Home from './pages/Home';
import Sign from './pages/Sign';
import Forgot from './pages/Forgot';

function App () {
  return (
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/log" element={<Log/>} />
             <Route path="sign" element={<Sign/>} />
             <Route path="forgot" element={<Forgot/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
