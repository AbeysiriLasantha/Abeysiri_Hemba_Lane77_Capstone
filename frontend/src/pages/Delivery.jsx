import React from 'react';

const Delivery = () => {
  return (
    <div className="container mt-5">
      <h1>Delivery Information</h1>
      <p>At Lane77, we offer fast and reliable shipping options for all orders.</p>
      <p>Standard Shipping: 3-5 business days</p>
      <p>Express Shipping: 1-2 business days</p>
      <p>Shipping Costs:</p>
      <ul>
        <li>Standard: Free for orders over $50, otherwise $5.99</li>
        <li>Express: $15.99 flat rate</li>
      </ul>
      <p>For more information, please contact our support team.</p>
    </div>
  );
};

export default Delivery;
