import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  const sizes = ['S', 'M', 'L', 'XL', '6', '8', '10', '12', '16', '28', '30', '32', '34'];
  
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <h5>CATEGORIES</h5>
          <ul className="list-unstyled">
            <li><Link to="/category/dresses">Dresses</Link></li>
            <li><Link to="/category/tops">Tops</Link></li>
            <li><Link to="/category/jeans">Jeans</Link></li>
            <li><Link to="/category/trousers">Trousers</Link></li>
            <li><Link to="/category/skirts">Skirts</Link></li>
            <li><Link to="/category/shorts">Shorts</Link></li>
            <li><Link to="/category/jumpsuits">Jumpsuits & Playsuits</Link></li>
            <li><Link to="/category/dungaree">Dungaree</Link></li>
            <li><Link to="/category/blazers">Blazers</Link></li>
            <li><Link to="/category/cardigans">Cardigans</Link></li>
          </ul>

          <h5>SIZE</h5>
          <div className="row">
            {sizes.map((size) => (
              <div key={size} className="col-4 form-check text-center"> {/* Adjusted the column size */}
                <input className="form-check-input" type="radio" name="size" id={`size-${size}`} />
                <label className="form-check-label" htmlFor={`size-${size}`}>{size}</label>
              </div>
            ))}
          </div>

          <h5>COLOR</h5>
          <div className="d-flex">
            {['black', 'blue', 'brown', 'pink', 'red', 'green', 'white', 'purple', 'gray'].map((color) => (
              <div key={color} className="color-box mx-1" style={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%' }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
