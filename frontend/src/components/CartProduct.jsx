import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (itemCode) => {
    const Index = cart.findIndex((p) => p.itemCode === itemCode);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", itemCode });
    }
  };
  const Decrease = (itemCode) => {
    const Index = cart.findIndex((p) => p.itemCode === itemCode);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", itemCode });
    }
  };


  return (
    <div className="d-flex border mb-3">
      <img src={product.imageURL1} className="w-25 h-25" alt="" />
      <div className="detail ms-4">
        <h4>{product.itemName}</h4>
        <h5>${product.itemPrice}</h5>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => Decrease(product.itemCode)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => Increase(product.itemCode)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => dispatch({ type: "Remove", itemCode: product.itemCode })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;