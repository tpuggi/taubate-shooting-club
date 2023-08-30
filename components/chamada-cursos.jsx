import bullet from "../public/images/bullete.png";
import React, { useState, useEffect } from "react";

import { coursesCarousel } from "../context/context";
import Image from "next/image";

const ChamadaCursos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = coursesCarousel.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="flex justify-center items-center bg-red-800 bg-opacity-75">
      <div className="pt-10 text-center justify-center items-center text-white">
        <h1 style={{ fontSize: "80px" }}>Conheça também nossos cursos!</h1>
        <p style={{ fontSize: "35px" }} className="pr-10 pl-10">
          A melhor estrutura com stand de tiros, cursos e treinamentos e toda
          assessoria para compra de produtos controlados do Brasil.
          <br></br>
        </p>
        <p style={{ fontSize: "50px" }}>AGENDE UMA VISITA AGORA MESMO!</p>
        <div className="flex justify-center pt-8">
          <Image src={bullet} className="w-[89px] h-[22px]" />
        </div>
        <div className="flex justify-center items-center pt-8">
          <button
            className="bg-[#BFAE95] text-center text-red-800 text-3xl pr-20 pl-20 pt-5 pb-5 font-extrabold hover:shadow-2xl"
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              border: "2px solid black",
            }}
          >
            CURSOS
          </button>
        </div>

        <div className="flex justify-center mx-25 my-10 py-10 overflow-hidden bg-cover">
          <div
            className="flex ease-in-out transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentSlide * 100) / 3}%)`,
            }}
          >
            {coursesCarousel.map((image, index) => (
              <div
                key={index}
                className="flex-none w-1/3 transition-transform transform bg-black translate-x-0 duration-300 mx-5"
              >
                <div class="rounded overflow-hidden shadow-lg">
                  <Image class="w-full" src={image.url} alt={image.fileName} />
                  <div class="px-6 py-4 self-center">
                    <div class="font-bold text-xl mb-2">{image.fileName}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="justify-between flex px-10 z-0 text-[20px]">
          <button
            onClick={prevSlide}
            className="bg-black hover:bg-[#BFAE95] text-white rounded px-4 py-2 left-0 transform -translate-y-1/2"
          >
            &lt; {/* Ícone de seta para a esquerda */}
          </button>

          <div className="indicators flex justify-center mt-3">
            {coursesCarousel.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 bg-gray-300 rounded-full mx-1 cursor-pointer ${
                  index === currentSlide ? "bg-gray-700" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-black hover:bg-[#BFAE95] text-white rounded px-4 py-2 right-0 transform -translate-y-1/2"
          >
            &gt; {/* Ícone de seta para a direita */}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChamadaCursos;
