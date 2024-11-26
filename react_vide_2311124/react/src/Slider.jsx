import { useState, useEffect } from 'react';
import './App.css'; 

const images = [
  { id: 1, src: 'product1.webp', alt: 'First Slide' },
  { id: 2, src: 'product2.webp', alt: 'Second Slide' },
  { id: 3, src: 'product3.webp', alt: 'Third Slide' },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatic slide functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="slider-image"
        />
        <button onClick={handlePrev} className="slider-button slider-button-prev">
          &#8592;
        </button>
        <button onClick={handleNext} className="slider-button slider-button-next">
          &#8594;
        </button>
      </div>
      <p className="slider-indicator">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}
