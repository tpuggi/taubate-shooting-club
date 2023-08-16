import React, { useState } from 'react';
import Image from 'next/image';
import clubePhoto from '../public/images/clube.jpg';
import clube1Photo from '../public/images/clube1.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = 2;

  return (
    <div className="flex justify-center px-25 py-10 overflow-hidden">
      <div className="carousel-container">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="w-full flex-shrink-0 carousel-slide">
            <Image src={clubePhoto} className="w-full h-full object-cover" />
          </div>
          <div className="w-full flex-shrink-0 carousel-slide">
            <Image src={clubePhoto} className="w-full h-full object-cover" />
          </div>
          {/* Adicione mais slides conforme necessário */}
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 absolute left-0 top-3/4 transform -translate-y-1/2"
      >
        &lt; {/* Ícone de seta para a esquerda */}
      </button>
      
      <button
        onClick={nextSlide}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 absolute right-0 top-3/4 transform -translate-y-1/2"
      >
        &gt; {/* Ícone de seta para a direita */}
      </button>
      <style jsx>
        {`
          .carousel-container {
            display: flex;
            align-items: center;
            overflow: hidden;
          }
          
          .carousel-slide {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Carousel;
