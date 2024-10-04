import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Header from './components/Header'
import CartWishList from './components/CartWishList';


function App() {
  return (
    <Router>
    <div className="nav-container" >
        <Header /> 
        <Navbar /> 
        <CartWishList/>
    

        <Routes>
        <Route path="/" element={<Home/>} />
          {/* <Route path="/women" element={<DropdownMenuWomen/>} /> */}
          <Route path="/men" element={<Home/>} />
          <Route path="/workwear" element={<Home/>} />
          <Route path="/linen" element={<Home/>} />
          <Route path="/natural" element={<Home/>} />
          <Route path="/blends" element={<Home/>} />
          <Route path="/denim" element={<Home/>} />
          <Route path="/occasion" element={<Home/>} />
          <Route path="/activeWear" element={<Home/>} /> 

        </Routes>
        </div>
    </Router>
  );
}

  
export default App;
  