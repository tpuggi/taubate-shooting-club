import bullet from "../public/images/bullete.png";
import React, { useState, useEffect } from "react";

import { coursesCarousel } from "../context/context";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const CURSOS = ["fundamentos-do-tiro", "capacitacao", "atirador-esportivo", "home-defense"];

const ChamadaCursos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = coursesCarousel.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 1750);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div
      className="flex justify-center items-center bg-red-800 bg-opacity-75"
      id="cursos"
      data-aos="fade-up"
    >
      <div className="pt-10 text-center text-white w-[100%]">
        <h1 className="text-[2em] md:text-[4em] montserrat_classic-font">
          Conheça também nossos cursos!
        </h1>
        <p className="mx-10 mb-5 text-[1em] md:text-[1.5em] inter-font">
          A melhor estrutura com stand de tiros, cursos e treinamentos e toda
          assessoria para compra de produtos controlados do Brasil.
        </p>
        <p className="text-[1.75em] neue_montreal-font">
          AGENDE UMA VISITA AGORA MESMO!
        </p>
        <div className="flex justify-center">
          <Image src={bullet} alt="bullet icon" className="w-20" />
        </div>
        <div className="flex justify-center items-center py-4">
          <button
            className="bg-[#BFAE95] text-center bebas_neue-font text-red-800 text-3xl px-20 py-5 font-extrabold hover:shadow-2xl text-[3em]"
            style={{
              fontWeight: "bold",
              border: "2px solid black",
            }}
          >
            CURSOS
          </button>
        </div>

        <div className="relative w-full overflow-hidden bg-cover my-10">
          <div
            className="flex ease-in-out transition-transform duration-300"
            style={{
              transform: `translateX(-${(currentSlide * 100) / 3}%)`,
            }}
          >
            {coursesCarousel.map((image, index) => (
              <div
                key={index}
                className="flex-none w-1/3 md:w-2/5 transition-transform transform bg-black translate-x-1/3 top-1/2 left-1/2 mx-5"
              >
                <Link
                  href={
                    `/${slugify(image.fileName, {
                      replacement: "-",
                      lower: true,
                      strict: true,
                    })
                      .replace("png", "")
                      .replace("jpg", "")}` in CURSOS
                      ? "/basic_course"
                      : "/advanced_course"
                  }
                  className="rounded overflow-hidden shadow-lg flex flex-col justify-between h-full"
                >
                  <Image
                    className="w-full"
                    src={image.url}
                    alt={image.fileName}
                  />
                  <div className="px-6 py-4 self-center">
                    <div className="font-bold text-[1em] mb-1 montserrat_classic-font">
                      {image.fileName
                        .replace(".png", "")
                        .replace(".jpg", "")
                        .replace("./", "")}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
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
            onClick={prevSlide}
            className="bg-black hover:bg-[#BFAE95] text-white rounded px-4 py-2 left-2 transform -translate-y-1/2 absolute top-1/3 z-30 flex cursor-pointer group items-center justify-center"
          >
            &lt; {/* Ícone de seta para a esquerda */}
          </button>
          <button
            onClick={nextSlide}
            className="bg-black hover:bg-[#BFAE95] text-white rounded px-4 py-2 right-2 transform -translate-y-1/2 absolute top-1/3 z-30 flex cursor-pointer group items-center justify-cente"
          >
            &gt; {/* Ícone de seta para a direita */}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChamadaCursos;
