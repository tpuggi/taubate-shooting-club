import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "../context/context";
import { campsImages } from "../context/context";
import { conteudoCamps } from "../context/context";
import bullet from "../public/images/bullete.png";

const CONTATOS = [
  {
    text: "Taubate Shooting Club",
    src: socialIcons[0].url,
    link: "https://www.facebook.com/taubateshootingclub",
  },
  {
    text: "taubateshootingclub",
    src: socialIcons[1].url,
    link: "https://www.instagram.com/taubateshootingclub/",
  },
  {
    text: "(12) 3681-4106",
    src: socialIcons[2].url,
    link: "tel:+1236814106",
  },
  {
    text: "(12) 99735-9612",
    src: socialIcons[3].url,
    link: "https://wa.me/12997359612?text=Oi",
  },
];

const COURSES = [
  {
    src: campsImages[1].url,
    title: "Operador de Pistola",
    text: "O Curso de operador de pistola é destinado àqueles que querem aprimorar suas técnicas e os fundamentos com pistola, visando melhorar velocidade e precisão.",
    detail: ["100 cartuchos", "1 dia", "Para sócios e atiradores com CR"],
  },
  {
    src: campsImages[1].url,
    title: "Curso de Armamento e Tiro",
    text: "O curso tem como prioridade construir ou ampliar os conhecimentos do aluno para a utilização consciente e eficaz de armas de fogo.",
    detail: ["80 disparos no estande", "6 horas", "Diversas Armas"],
  },
  {
    src: campsImages[1].url,
    title: "Curso de Tiro Tático Defensivo",
    text: "O objetivo do Curso de Tiro Tático Defensivo é preparar o aluno, que já frequentou cursos de tiro e que deseja usar sua arma de fogo para defesa pessoal, ampliando seus conhecimentos.",
    detail: ["mais de 150 disparos", "16 horas", "Diversos Calibres"],
  },
  {
    src: campsImages[1].url,
    title: "Curso De Operador De Fuzil",
    text: "Visa a capacitação no manuseio e uso de carabinas na plataforma AR15, IA2 e FAL.",
    detail: ["50 cartuchos", "1 dia", "Para sócios e atiradores com CR"],
  },
  {
    src: campsImages[1].url,
    title: "Curso de Operador de Espingarda",
    text: "Visa a capacitação no manuseio e uso de Espingardas de repetição e semi-automáticas.",
    detail: ["30 cartuchos", "1 dia", "Para sócios e atiradores com CR"],
  },
  {
    src: campsImages[1].url, // Substitua pelo URL da imagem do novo curso
    title: "Curso de Operador de Duas Armas",
    text: "A combinação efetiva de armamentos aliada à aplicação perfeita de técnicas de operação. Seja eficaz e sobreviva a eventos violentos utilizando em sintonia os armamentos disponíveis.",
    detail: ["Pistola/Fuzil - Pistola/Espingarda", "1 dia"],
  },
];

function ACourse() {
  return (
    <div className="text-white mt-28">
      <div className="ml-20 mr-20">
        <p className="text-[90px] text-center bebas_neue-font">
          Cursos de Aprimoramento no Tiro
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-auto max-h-[20rem] w-auto flex items-center m-12 border border-gray-700 rounded-lg shadow  bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="origin-top-left px-4">
            <p className="text-[32px] montserrat_classic-font">Conteudo:</p>
            <p className="text-[24px] inter-font">
              Os cursos de aprimoramento no tiro são indicados para os que
              desejam melhorar no tiro esportivo ou de defesa, é uma experiência
              fundamental para habilitar ou capacitar o uso mais assertivo de
              armas de fogo
            </p>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Image src={conteudoCamps[1].url} alt="Curso de Iniciação no Tiro" />
        </div>
      </div>
      <div className="ml-20 mr-20">
        <p className="text-[80px] bebas_neue-font">Cursos presentes:</p>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-wrap gap-3 m-10 ">
        {COURSES.map((curso, index) => (
          <div
            className="mr-1 pl-10 pt-10 pb-10 bg-red-800 border border-gray-700"
            key={index}
          >
            <div className="pb-2">
              <p className="text-[32px] bebas_neue-font">{curso.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 m-2">
              <Image
                src={curso.src}
                className="h-full self-center"
                alt={curso.title}
              />
              <div>
                <div>
                  <p className="text-[90%] inter-font">{curso.text}</p>
                </div>
                {curso.detail.map((det, idx) => (
                  <div
                    key={idx}
                    className="bebas_neue-font flex items-center pl-4 text-[1em] py-2"
                  >
                  </div>
                ))}
                                <button
                  className="bg-red-800 shadow border border-black border-opacity-20 text-center text-xl py-2 px-8 font-extrabold hover:shadow-2xl mt-8 mx-auto ml-20"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    border: "2px solid white",
                    fontFamily: "neue_montreal",
                  }}
                >
                  SAIBA MAIS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-20">
        <p className="text-[38px] montserrat_classic-font">
          Fique ligado em nossas redes sociais para sempre receber as
          atualizações, como datas e inscrições para futuros campeonatos!!
        </p>
      </div>

      <div className="py-10 flex justify-around items-center space-x-4 w-full pl-3">
        {CONTATOS.map((contato, idx) => (
          <Link key={idx} href={contato.link} className="flex items-center">
            <Image
              src={contato.src}
              alt={contato.text + "ícone"}
              className="w-10 h-10 mr-2"
            />
            <p className="text-[24px] neue_montreal-font">{contato.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ACourse;
