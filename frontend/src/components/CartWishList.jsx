import React from 'react';
import './CartWishList.css'; // Ensure you have this CSS file
import { Link } from 'react-router-dom';

const CartWishList = () => {
  return (
    <nav className="navbaricons">
      <div className="icons">
        <Link to="/wishlist" className="icon">❤️ WISHLIST (0)</Link>
        <Link to="/cart" className="icon">🛒 CART (1)</Link>
      </div>
    </nav>
  );
};

export default CartWishList;
