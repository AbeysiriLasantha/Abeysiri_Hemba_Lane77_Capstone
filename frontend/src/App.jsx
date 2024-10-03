import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <Router>
    <div className="nav-container">
        <Header /> {/* The logo should stay at the top left */}
        <Navbar /> {/* Navbar placed right under the logo */}
     </div>
    
    <br/>
      <div className="app">
        <Routes>
          <Route path="/women" element={<Home/>} />
          {/* <Route path="/men" element={<MEN/>} />
          <Route path="/workwear" element={<WORKWEAR/>} />
          <Route path="/linen" element={<LINEN/>} />
          <Route path="/natural" element={<NATURAL/>} />
          <Route path="/blends" element={<BLENDS/>} />
          <Route path="/denim" element={<DENIM/>} />
          <Route path="/occasion" element={<OCCASION/>} />
          <Route path="/activeWear" element={<ACTIVE WEAR/>} /> */}

        </Routes>
      </div>
    </Router>
  );
}

  
export default App;
  