import React, { useState } from 'react';
import './Navbar.css'; // Ensure you have this CSS file
import { Link } from 'react-router-dom';
import DropdownMenuWomen from './DropdownMenuWomen'; 
import DropdownMenuMen from './DropdownMenuMen'; 
import Sidebar from './SideBar';

const Navbar = () => {
  // Separate states for each dropdown
  const [womenDropdownVisible, setWomenDropdownVisible] = useState(false);
  const [menDropdownVisible, setMenDropdownVisible] = useState(false);

  // Show/hide dropdown for "WOMEN"
  const showWomenDropdown = () => setWomenDropdownVisible(true);
  const hideWomenDropdown = () => setWomenDropdownVisible(false);

  // Show/hide dropdown for "MEN"
  const showMenDropdown = () => setMenDropdownVisible(true);
  const hideMenDropdown = () => setMenDropdownVisible(false);

  return (
    <nav className="navbar" style={{border:"5px solid green"}}>
      <div >
        <ul className="nav-links">
          <li
            onMouseEnter={showWomenDropdown}  // Show "WOMEN" dropdown on hover
            //onMouseLeave={hideWomenDropdown}  // Hide "WOMEN" dropdown when mouse leaves
            className="dropdown"
          >
            <Link to="/women" className="dropdown-toggle">WOMEN</Link>
            {/* Show the dropdown if womenDropdownVisible is true */}
            {womenDropdownVisible && <DropdownMenuWomen />}
          </li>

          <li
            onMouseEnter={showMenDropdown}  // Show "MEN" dropdown on hover
            //onMouseLeave={hideMenDropdown}  // Hide "MEN" dropdown when mouse leaves
            className="dropdown"
          >
            <Link to="/men" className="dropdown-toggle">MEN</Link>
            {/* Show the dropdown if menDropdownVisible is true */}
            {menDropdownVisible && <DropdownMenuMen />}
          </li>

          <li><Link to="/workwear">WORKWEAR</Link></li>
          <li><Link to="/linen">LINEN</Link></li>
          <li><Link to="/natural">NATURAL</Link></li>
          <li><Link to="/denim">DENIM</Link></li>
          <li><Link to="/occasion">OCCASION</Link></li>
          <li><Link to="/activeWear">ACTIVE WEAR</Link></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
