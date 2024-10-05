import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BuyNow = () => {
    const { totalPrice } = useParams();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('United States');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('debit');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({
            email,
            firstName,
            lastName,
            country,
            address,
            city,
            state,
            zipCode,
            phone,
            paymentMethod,
        });
    };

    return (
        <div className="container mt-5">
            <h4>Total Price: Rs {totalPrice}</h4> {/* Display total price */}
            <div className="row">
                <div className="col-md-6">
                    <h4>Contact</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email or mobile phone number"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked
                                />
                                <label className="form-check-label">Email me with news and offers</label>
                            </div>
                        </div>
                        <h4>Delivery</h4>
                        <div className="mb-3">
                            <select
                                className="form-select"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                            >
                                <option value="United States">United States</option>
                                {/* Add more countries as needed */}
                            </select>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="State"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ZIP code"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <h4>Shipping method</h4>
                        <p>Enter your shipping address to view available shipping methods.</p>
                        <h4>Payment</h4>
                        <p>All transactions are secure and encrypted.</p>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                value="debit"
                                checked={paymentMethod === 'debit'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">Pay with Debit or Credit Card</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                value="mintpay"
                                checked={paymentMethod === 'mintpay'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">Mintpay | Shop now. Pay later.</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                value="bank"
                                checked={paymentMethod === 'bank'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">Bank Card / Bank Account - PayHere</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                value="koko"
                                checked={paymentMethod === 'koko'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">Koko: Buy Now Pay Later</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">Cash on Delivery (COD)</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Pay now</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4>Bodysuit - 300924</h4>
                            <p>UK 14 / Black</p>
                            <h5>Rs 3,980.00</h5>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Discount code or gift card"
                            />
                            <button className="btn btn-secondary">Apply</button>
                            <hr />
                            <h5>Subtotal</h5>
                            <p>Rs 3,980.00</p>
                            <h5>Total</h5>
                            <p>LKR Rs 3,980.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyNow;
