// Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../features/ContextProvider';
import { totalItem, totalPrice } from '../features/CartReducer';
import CartProduct from '../components/CartProduct';
import { useNavigate } from 'react-router-dom';    

const Cart = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();  

  const handleCheckout = () => {
    const price = totalPrice(cart); // Calculate total price
    navigate(`/buy-now/${price}`); // Navigate to BuyNow with price
  };

  return (
    <div className='container mt-3'>
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct key={p.id} product={p} />  
          ))}
        </div>
        <div className="col-4">
          <div className="bg-secondary p-3 text-white">
            <h5>Total Items: {totalItem(cart)}</h5>
            <h5>Total Price: ${totalPrice(cart)}</h5>
            <button className='btn btn-warning' onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
