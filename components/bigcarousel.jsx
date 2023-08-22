import React, { useEffect, useState } from "react";
import Image from "next/image";

import { bigCarouselImages } from "../context/context";

import clubePhoto from "../public/images/clube.jpg";
import clube1Photo from "../public/images/clube1.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = bigCarouselImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="flex justify-center mx-25 py-10 overflow-hidden bg-cover">
      <div className="carousel-container">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bigCarouselImages.map((image, idx) => {
            return (
              <div className="w-full flex-shrink-0 h-[75vh]">
                <Image
                  src={image.url}
                  className="w-full h-[75vh] object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

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
