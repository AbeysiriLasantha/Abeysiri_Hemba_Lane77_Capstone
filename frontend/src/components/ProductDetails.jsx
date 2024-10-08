import React, { useContext } from "react";
import { CartContext } from "../features/ContextProvider";
import { DataContext } from "../features/DataProvider"; // Import your DataContext
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { itemCode } = useParams();
  const { dispatch } = useContext(CartContext);
  const { productsData } = useContext(DataContext); // Get products data from context

  // Find the product by itemCode
  const product = productsData?.find((p) => p.itemCode === itemCode);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        {/* Left Column: Product Image */}
        <div className="col-md-6">
          <img
            src={product.imageURL1}
            className="img-fluid"
            alt={product.itemName}
            style={{ maxWidth: "80%", height: "auto" }} // Adjust size here
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="col-md-6">
          <h5 className="text-muted">{product.collectionCat.join(", ")}</h5>
          <h2 className="my-2">{product.itemName}</h2>
          <h4 className="text-danger">${product.itemPrice}</h4>
          <p className="text-warning">Hurry! Only {product.quantity} units left in stock!</p>

          {/* Size Selection */}
          <div className="my-3">
            <h6>Size</h6>
            <div>
              {product.availableSizes.map((size) => (
                <button key={size.size} className="btn btn-outline-secondary mx-1">
                  {size.size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="my-3">
            <h6>Color</h6>
            <div>
              <button className="btn btn-secondary mx-1" style={{ backgroundColor: "black" }}></button>
              <button className="btn btn-light mx-1" style={{ backgroundColor: "white" }}></button>
            </div>
          </div>

          <Link to={`/buy-now/${product.itemPrice}`}>
            <button className="btn btn-primary btn-lg w-100 mb-2">Buy Now</button>
          </Link>


          <button
            className="btn btn-dark btn-lg w-100"
            onClick={() => dispatch({ type: "Add", product })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
