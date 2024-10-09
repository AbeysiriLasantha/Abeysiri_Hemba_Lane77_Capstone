import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure this file exists for styles

const images = [
  '/assets/images/wall1.png',
  '/assets/images/wall2.png',
  '/assets/images/wall3.png',
  '/assets/images/wall4.png',
  '/assets/images/wall5.png',
  '/assets/images/wall6.png'
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="image-slider">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          style={{
            opacity: currentIndex === index ? 1 : 0,
            width: '100%', // Set image width to 100%
            transition: 'opacity 1s ease-in-out', // Smooth transition
          }}
        />
      ))}
    </div>
  );
};

export default Home;
