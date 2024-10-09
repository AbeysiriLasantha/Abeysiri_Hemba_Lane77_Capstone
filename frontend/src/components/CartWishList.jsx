import React, { useContext, useState, useEffect } from "react";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { CartContext } from "../features/ContextProvider";
import axios from 'axios';

const CartWishList = () => {
  const { cart } = useContext(CartContext);
  const [inputValue, setInputValue] = useState(''); // Single input for email
  const [password, setPassword] = useState(''); // Separate state for password
  const [showPasswordInput, setShowPasswordInput] = useState(false); // Control visibility of password input
  const [user, setUser] = useState(null); // State to hold user information
  const [email, setEmail] = useState('')
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/findusers/${email}`);
      if (res.data) {
        // User found, prompt for password
        
        setShowPasswordInput(true);
        setPassword('');
        setInputValue('');
        setEmail(email);
        setUser(res.data);
      }
    } catch (err) {
      // User not found, redirect to User component
      alert('User not found. Redirecting to registration...');
      // Redirect to the User component
      navigate('/user', { state: { email } });
    }
  };


  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(email)
    console.log(password)
    try {
      const res = await axios.post('http://localhost:5000/userlogin', { email: email, password });
      
      const userData = res.data.user; // Access the nested user object
      if (userData) {
        setUser(userData); // Save user data to state
        alert(`Welcome, ${userData.firstName} ${userData.lastName}!`); // Access firstName and lastName from userData
        setShowPasswordInput(false); // Reset password input visibility
        setInputValue(''); // Clear input
        setPassword(''); // Clear password
      } else {
        alert('Invalid email or password.'); // Notify if login fails
      }
    } catch (err) {
      alert('Login failed. Please check your password.');
      console.error('Error logging in:', err);
    }
  };

  const handleLogout = () => {
    setUser(null); // Clear user state on logout
    setEmail('');
    alert('You have been logged out.'); // Notify user
  };

  return (
    <div className="d-flex justify-content-end align-items-center py-3 px-5 bg-secondary text-white">
      {/* Sign-in section */}
      {!user ? (
        <form onSubmit={handleSearchUser} className="d-flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control me-2"
            style={{ width: '200px' }}
            value={email} // Use the email state
            onChange={handleEmailChange} // Handle email changes
            required
          />
          <button type="submit" className="btn btn-dark me-2">Sign In</button>
        </form>
      ) : showPasswordInput ? (
        <form onSubmit={handleLogin} className="d-flex">
          <input
            type="password"
            placeholder="Enter password here" // Updated placeholder
            className="form-control me-2"
            style={{ width: '200px' }}
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="btn btn-success me-2">Log In</button>
        </form>
      ) : (
        <div className="logeduser">
          <p className="text-white">
            {user.firstName} {user.lastName}
            <button onClick={handleLogout} className="btn btn-danger ms-2">Log Out</button>
          </p>
        </div>
      )}

      {/* Cart Icon */}
      <Link to="/cart" className="navbar-link fs-2 text-white text-decoration-none">
        <BsCart /> {cart.length}
      </Link>
    </div>
  );


};

export default CartWishList;
