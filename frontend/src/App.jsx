import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import './pages/Home.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Header from './components/Header'
import CartWishList from './components/CartWishList';
import Footer from './pages/Footer';
import Products from './pages/Products';
import Cart from './pages/Cart'
import NavbarNew from './components/NavbarNew';

function App() {
  return (
    <Router>
    <div className="nav-container" >
       
        <Header /> 
        <Navbar /> 
        {/* <NavbarNew/> */}
        <CartWishList/>
             
        <Routes>
        <Route path="/" element={<Home/>} />
          {/* <Route path="/women" element={<DropdownMenuWomen/>} /> */}
          <Route path="/men" element={<Home/>} />
          <Route path="/workwear" element={<Home/>} />
          <Route path="/linen" element={<Products/>} />
          <Route path="/natural" element={<Home/>} />
          <Route path="/blends" element={<Home/>} />
          <Route path="/denim" element={<Home/>} />
          <Route path="/occasion" element={<Home/>} />
          <Route path="/activeWear" element={<Home/>} /> 
          <Route path="/cart" element={<Cart></Cart>}></Route>

        </Routes>
        <Footer />
    </div>

    </Router>
  );
}

  
export default App;
  