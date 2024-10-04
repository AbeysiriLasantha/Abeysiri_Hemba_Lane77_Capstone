import React from 'react'
import wall_1 from '../assets/images/logo.jpg'; // Adjust the path as needed
import { Link } from 'react-router-dom'; 

function Test() {
  return (
    <div className=''>
        <Link to="/">
          <img src={wall_1} alt="Logo" />
        </Link>
    </div>
  )
}

export default Test
