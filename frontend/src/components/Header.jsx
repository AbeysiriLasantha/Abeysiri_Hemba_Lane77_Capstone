import React from 'react'
import logo from '../assets/images/logo2.jpg'; // Adjust the path as needed
import './Header.css'
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className='logoDiv' >
       <Link to="/">
        <div className="innerLogo"> Lane<sup>77</sup></div>        
        </Link> 
    </div>
  )
}

export default Header
