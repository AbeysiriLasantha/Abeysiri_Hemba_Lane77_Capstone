import React, { useEffect, useState } from 'react';
import Data from '../../Data.json';
import Product from '../components/Product';
import Sidebar from '../components/SideBar'; // Import Sidebar

const Products = (props) => {
  const [products, setProducts] = useState(Data.products);

  useEffect(() => {
    const filterCriteria = Object.entries(props).filter(([key]) =>
      key.startsWith('selectionType') || key.startsWith('selectionValue')
    );

    // Create dynamic filters
    const filteredProducts = Data.products.filter(product => {
      for (let i = 0; i < filterCriteria.length / 2; i++) {
        const selectionType = props[`selectionType${i + 1}`];
        const selectionValue = props[`selectionValue${i + 1}`];

        // Check if the product value is an array (e.g., collectionCat)
        if (Array.isArray(product[selectionType])) {
          if (!product[selectionType].includes(selectionValue)) {
            return false; // Return false if it doesn't match
          }
        } else {
          if (product[selectionType] !== selectionValue) {
            return false; // Return false if it doesn't match
          }
        }
      }
      return true; // All conditions matched
    });

    setProducts(filteredProducts);
  }, [props]);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar Column */}
        <div className="col-md-3">
          <Sidebar />
        </div>
        
        {/* Products Column */}
        <div className="col-md-9">
          <div className='row row-cols-1 row-cols-md-5 g-4'>
            {products.length > 0 ? ( // Check if products exist
              products.map(p => (
                <Product key={p.itemCode} product={p} />
              ))
            ) : (
              <p>No products found.</p> // Display message if no products found
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
