import React, { useContext } from "react";
import { Link } from 'react-router-dom';

import { BsCart } from "react-icons/bs";
import { CartContext } from "../features/ContextProvider";

const NavbarNew = () => {
    const { cart } = useContext(CartContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/Women" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                WOMEN
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/women/tops">Tops</Link></li>
                                <li><Link className="dropdown-item" to="/women/jeans">Jeans</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/women/trousers">Trousers</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/link">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/cart"
                                className="navbar-link fs-5 text-blue text-decoration-none"
                            >
                                <BsCart />{cart.length}
                            </Link>
                        </li>

                    </ul>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>


                </div>
            </div>
        </nav>
    );
};

export default NavbarNew;
