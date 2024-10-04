// DropdownMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.css'; // Create this CSS file for any specific styles

const DropdownMenuMen = () => {
  return (
    <ul className="dropdown-menu">
      <li><Link to="/men/shirts">Shirts</Link></li>
      <li><Link to="/men/trousers">Trousers</Link></li>
      <li><Link to="/men/shorts">Shorts</Link></li>
      <li><Link to="/men/tshirts">T-Shirts</Link></li>
      <li><Link to="/men/denim">Denim</Link></li>
      </ul>
  );
};

export default DropdownMenuMen;
