import React from 'react';
import './Navbar.css'; // Ensure you have this CSS file
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
     <div>
      <ul className="nav-links">
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/men">MEN</Link></li> 
        <li><Link to="/workwear">WORKWEAR</Link></li>
        <li><Link to="/linen">LINEN</Link></li>
        <li><Link to="/natural">NATURAL</Link></li>
        <li><Link to="/denim">DENIM</Link></li>
        <li><Link to="/occasion">OCCASION</Link></li>
        <li><Link to="/activeWear">ACTIVE WEAR</Link></li>  
      </ul>
      {/* <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div> */}
      </div>
      <div className="icons">
        <a href="/wishlist" className="icon">❤️ WISHLIST (0)</a>
        <a href="/cart" className="icon">🛒 CART (1)</a>
      </div>
    </nav>
  );
};

export default Navbar;
