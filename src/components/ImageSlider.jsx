/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "/src/styles/componentStlyes.css";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [images.length, interval]);

  return (
    <div className='image-slider relative w-full h-48 md:h-56 lg:h-64 overflow-hidden'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-1000 ease-in-out ${
            currentIndex === index
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className='w-full h-full object-cover'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
