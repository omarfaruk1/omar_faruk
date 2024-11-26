import { useState } from 'react';

const images = [
  { id: 1, src: 'slider1.jpg', alt: 'First Slide' },
  { id: 2, src: 'slider2.jpg', alt: 'Second Slide' },
  { id: 3, src: 'slider3.jpg', alt: 'Third Slide' },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        width: '500px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '300px',
          overflow: 'hidden',
          borderRadius: '8px',
          border: '2px solid #ccc',
        }}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />
        <button
          onClick={handlePrev}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          &#8594;
        </button>
      </div>
      <p>
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}

