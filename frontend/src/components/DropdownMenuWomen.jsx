// DropdownMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'; // Create this CSS file for any specific styles

const DropdownMenuWomen = () => {
  return (
    <ul className="dropdown-menu">
      <li><Link to="/women/dresses">Dresses</Link></li>
      <li><Link to="/women/tops">Tops</Link></li>
      <li><Link to="/women/jeans">Jeans</Link></li>
      <li><Link to="/women/trousers">Trousers</Link></li>
      <li><Link to="/women/skirts">Skirts</Link></li>
      <li><Link to="/women/shorts">Shorts</Link></li>
      <li><Link to="/women/jumpsuits">Jumpsuits & Playsuits</Link></li>
      <li><Link to="/women/dungaree">Dungaree</Link></li>
      <li><Link to="/women/blazers">Blazers</Link></li>
      <li><Link to="/women/cardigans">Cardigans</Link></li>
    </ul>
  );
};

export default DropdownMenuWomen;
