import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";
import { Link } from "react-router-dom"; // Import Link


const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="container-fluid">
      <div className="row">
              {/* Product display on the right */}
        <div className="col-md-9">
          <div className="card h-100">
            <Link to={`/product/${product.itemCode}`}>
              <img src={product.imageURL1} className="card-img-top h-75" alt="..." />
            </Link>
            <div className="card-body">
              <h4 className="card-title">{product.itemName}</h4>
              <h5 className="">${product.itemPrice}</h5>
              <button
                className="btn btn-primary"
                onClick={() => dispatch({ type: "Add", product: product })}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
