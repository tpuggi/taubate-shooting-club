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
const titleContact = [
  {
    title:
      "Fique ligado em nossas redes sociais para sempre receber as atualizações, como datas e inscrições para futuros campeonatos!!",
  },
];

const COURSES = [
  {
    src: campsImages[1].url,
    title: "Fundamentos no tiro",
    text: "O curso de fundamentos do tiro é o indicado para os que desejam iniciar no tiro esportivo ou de defesa, é uma experiência fundamental para habilitar ou capacitar ao uso de armas de fogo.",
    detail: ["Revólver", "Pistola", "Carabina"],
  },
  {
    src: campsImages[1].url,
    title: "Curso de capacitação",
    text: "O curso tem como prioridade qualificar o aluno para a prova de capacidade técnica aplicada por Instrutor de Armamento e Tiro da Polícia Federal (IAT/PF).",
    detail: ["2 horas", "60 disparos", ""],
  },
  {
    src: campsImages[1].url,
    title: "Curso de Atirador Esportivo",
    text: "O curso tem como prioridade, capacitar atiradores iniciantes para a prática do Tiro Defensivo (IDSC) ou Tiro Tático Dinâmico (TTD).",
    detail: ["1 dia", "Teoria e Prática", ""],
  },
  {
    src: campsImages[1].url,
    title: "Torneio Buscapé",
    text: "Carabina é uma arma de fogo mais curta que o fuzil, tendo entre 1,0 e 1,2 metro de comprimento muito usada em caça e tiro desportivo podendo ser de diversos calibres.",
    detail: ["", "", ""],
  },
];

function Course() {
  return (
    <div className="text-white mt-28">
      <div className="ml-20 mr-20">
        <p className="text-[90px] text-center bebas_neue-font">
          Cursos de Iniciação no Tiro
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-auto max-h-[20rem] w-auto flex items-center m-12 bg-white border border-gray-200 rounded-lg shadow  bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="origin-top-left px-4">
            <p className="text-[32px] montserrat-font">Conteudo:</p>
            <p className="text-[24px] inter-font">
              Os cursos de iniciação no tiro são indicados para os que desejam
              iniciar no tiro esportivo ou de defesa, é uma experiência
              fundamental para habilitar ou capacitar ao uso de armas de fogo.
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
      <div className="md:grid md:grid-cols-2 flex flex-wrap gap-3 m-10">
        {COURSES.map((curso, index) => (
          <div
            className="mx-0.5 my-0.5 px-5 pt-4 bg-red-800 shadow-lg"
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
      <div className="ml-20 mr-20">
        {titleContact.map((titleContact, idx) => (
          <p className="text-[38px] montserrat-font" key={idx}>
            {titleContact.title}
          </p>
        ))}
      </div>
      <div className="pt-20 pb-10 flex justify-around items-center space-x-4 w-full pl-3">
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

export default Course;
