import bullet from "../public/images/bullete.png";
import React, { useState, useEffect } from "react";

import { bigCarouselImages } from "../context/context";
import Image from "next/image";

const ChamadaCursos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = bigCarouselImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  });

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
            style={{ transform: `translateX(-${currentSlide * 33}%)` }}
          >
            {bigCarouselImages.map((image, index) => (
              <div
                key={index}
                className="flex-none w-1/3 transition-transform transform bg-black translate-x-0 group-hover:translate-x-[33.33%] duration-300 mx-5"
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
      </div>
    </div>
  );
};
export default ChamadaCursos;
