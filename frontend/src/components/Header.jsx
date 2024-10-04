import React from 'react'
import logo from '../assets/images/logo2.jpg'; // Adjust the path as needed
import './Header.css'
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className='logoDiv'>
        <Link to="/">
          <div className="innerLogo"> <strong> LANE <superscript>77 </superscript> </strong> </div>
          {/* <img src={logo} alt="Logo" style={{ width: '100px', height: '80px' }} /> */}
        </Link>
    </div>
  )
}

export default Header
