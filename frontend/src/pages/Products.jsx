import React, { useEffect, useState } from 'react';
import Data from '../../Data.json';
import Product from '../components/Product';

const Products = ({ selectionType, selectionValue }) => {
  const [products, setProducts] = useState(Data.products);

  useEffect(() => {
    if (selectionType && selectionValue) {
      const filteredProducts = Data.products.filter(product =>
        product[selectionType]?.includes(selectionValue) // Check if selectionValue is included in the array
      );
      setProducts(filteredProducts);
    }
  }, [selectionType, selectionValue]);

  return (
    <div className="container mt-5">
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
  );
};

export default Products;
