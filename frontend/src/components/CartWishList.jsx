import React, { useContext, useState, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { CartContext } from "../features/ContextProvider";
import axios from 'axios';

const CartWishList = () => {
  const { cart } = useContext(CartContext);
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [user, setUser] = useState(null); // State to hold user information
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/findusers/${email}`);
      if (res.data) {
        // User found, prompt for password
        setShowPasswordInput(true);
      }
    } catch (err) {
      // User not found, redirect to User component
      alert('User not found. Redirecting to registration...');
      navigate('/user'); // Redirect to the User component
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/userlogin', { email, password });
      console.log('Login Response:', res.data); // Log the response data
      const userData = res.data.user; // Access the nested user object
      setUser(userData); // Save user data to state
      alert(`Welcome, ${userData.firstName} ${userData.lastName}!`); // Access firstName and lastName from userData
    } catch (err) {
      alert('Login failed. Please check your password.');
      console.error('Error logging in:', err);
    }
  };

  useEffect(() => {
    if (user) {
      console.log('User State:', user); // Log the user state to verify
    }
  }, [user]);

  return (
    <div className="d-flex justify-content-end align-items-center py-3 px-5 bg-secondary text-white">
      {/* Sign-in section */}
      <form onSubmit={handleSearchUser} className="d-flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="form-control me-2"
          style={{ width: '200px' }}
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" className="btn btn-dark me-2">Sign In</button>
      </form>

      {showPasswordInput && (
        <form onSubmit={handleLogin} className="d-flex">
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control me-2"
            style={{ width: '200px' }}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="btn btn-success me-2">Log In</button>
        </form>
      )}

      <div className="logeduser">
        {user && (
          <p className="text-white">
            Logged in as: {user.firstName} {user.lastName}
          </p>
        )}
      </div>

      {/* Cart Icon */}
      <Link to="/cart" className="navbar-link fs-2 text-white text-decoration-none">
        <BsCart /> {cart.length}
      </Link>
    </div>
  );
};

export default CartWishList;
