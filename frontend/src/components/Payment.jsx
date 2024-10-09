import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import visaIcon from '../assets/images/Visa.png';
import mastercardIcon from '../assets/images/Master.png';
import amexIcon from '../assets/images/Amex.png';
import paypalIcon from '../assets/images/PayPal.png';

const Payment = () => {
    const { total } = useParams(); 
    console.log(total);
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
            {/* Display total price */}
            <div className="alert alert-info text-center" role="alert">
                <h4 className="alert-heading">Total Price</h4>
                <p className="lead">$ {total}</p>
            </div>

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
                            <label className="form-check-label">
                                Pay with Visa or MasterCard
                                <img src={visaIcon} alt="Visa" style={{ width: '40px', marginLeft: '10px' }} />
                                <img src={mastercardIcon} alt="MasterCard" style={{ width: '40px', marginLeft: '10px' }} />
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                value="amex"
                                checked={paymentMethod === 'amex'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">
                                Pay with Amex Card
                                <img src={amexIcon} alt="Amex" style={{ width: '40px', marginLeft: '10px' }} />
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            <label className="form-check-label">
                                Pay with PayPal
                                <img src={paypalIcon} alt="PayPal" style={{ width: '40px', marginLeft: '10px' }} />
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary mt-3">Pay now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
