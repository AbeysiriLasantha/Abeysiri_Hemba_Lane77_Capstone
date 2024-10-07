import React, { createContext, useEffect, useState } from 'react';

// Create a context
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/items'); // Fetch from your backend
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductsData(data); // Set the products data
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchProducts(); // Call the fetch function
  }, []);

  return (
    <DataContext.Provider value={{ productsData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
