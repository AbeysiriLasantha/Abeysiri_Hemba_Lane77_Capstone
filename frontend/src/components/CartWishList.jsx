import React, { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../features/ContextProvider";

const CartWishList = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-end align-items-center py-3 px-5 bg-secondary text-white">
      {/* Sign-up section */}
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="form-control me-2" 
        style={{ width: '200px' }} 
      />
      <button className="btn btn-dark me-3">Sign Up</button>

      {/* Cart Icon */}
      <Link to="/cart" className="navbar-link fs-2 text-white text-decoration-none">
        <BsCart /> {cart.length}
      </Link>
    </div>
  );
};

export default CartWishList;
