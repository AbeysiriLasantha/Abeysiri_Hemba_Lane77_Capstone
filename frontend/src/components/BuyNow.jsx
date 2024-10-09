import React, { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BuyNow = () => {
    const location = useLocation();
    const { totalPrice } = useParams(); // Retrieve totalPrice from URL parameters
    let finalPrice;

    // Check if called from ProductDetails.jsx
    if (location.state && location.state.product) {
        finalPrice = location.state.product.ItemPrice; // Get price from the product object
    } else {
        // Use totalPrice from URL parameters if called from CartProduct.jsx
        finalPrice = totalPrice; 
    }

    const [discount, setDiscount] = useState(0);
    const [subtotal, setSubtotal] = useState(Number(finalPrice)); // Use finalPrice as initial subtotal
    const [total, setTotal] = useState(Number(finalPrice)); // Use finalPrice as initial total

    const applyDiscount = () => {
        const discountValue = parseFloat(discount) || 0; // Get the discount value
        const calculatedSubtotal = subtotal - discountValue; // Calculate subtotal
        const tax = calculatedSubtotal * 0.01; // Calculate tax
        const calculatedTotal = calculatedSubtotal + tax; // Calculate total
        setSubtotal(calculatedSubtotal.toFixed(2)); // Update subtotal
        setTotal(calculatedTotal.toFixed(2)); // Update total
    };

    return (
        <div className="container mt-5">
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Order Summary</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="text-dark">Total Price: <span className="text-success">$ {finalPrice}</span></h5>

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Discount code or gift card"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary btn-sm mb-3" onClick={applyDiscount}>
                            Apply Discount
                        </button>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <h6>Subtotal</h6>
                            <p>$ {subtotal}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <h6>Tax</h6>
                            <p>$ {(subtotal * 0.01).toFixed(2)}</p>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between">
                            <h5>Total</h5>
                            <p className="text-danger">$ {total}</p>
                        </div>
                        <Link to={`/pay-now/${total}`}>
                            <button className="btn btn-primary w-100 mt-3">Proceed to Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;
