import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto">
      {/* Slider principal */}
      <div className="relative w-full h-[42rem] mb-4 bg-black flex justify-center items-center">
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70"
          onClick={goToPrevious}
        >
          &lt;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70"
          onClick={goToNext}
        >
          &gt;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-20 h-20 cursor-pointer border-2 ${
              index === currentIndex ? 'border-white' : 'border-transparent'
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
