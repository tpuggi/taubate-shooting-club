import React, { useEffect, useState } from "react";
import Image from "next/image";

import { bigCarouselImages } from "../context/context";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = bigCarouselImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="carousel mt-1">
      <div className="relative w-full overflow-hidden bg-cover opacity-90">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bigCarouselImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 h-[75vh] ">
              <Image
                src={image.url}
                alt={`Image ${image.filename}`}
                className={`w-full h-[75vh] object-cover  ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="indicators flex justify-center mt-3">
        {bigCarouselImages.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer ${
              index === currentSlide ? "bg-gray-700" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
