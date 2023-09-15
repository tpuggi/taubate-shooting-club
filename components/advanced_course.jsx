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
    src: campsImages[0].url,
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
    text: "O objetivo do Curso de Tiro Tático Defensivo é preparar o aluno, que já frequentou cursos de tiro e que deseja usar sua arma de fogo para defesa pessoal, ampliando seus conhecimentos. As aulas teóricas e práticas são ministradas por instrutores de times táticos da Marinha do Brasil, Polícia Civil e Polícia Rodoviária Federal, com ampla experiência em confrontos urbanos e rurais.",
    detail: ["mais de 150 disparos", "16 horas", "Diversos Calibres"],
  },
  {
    src: campsImages[0].url,
    title: "Curso De Operador De Fuzil",
    text: "Visa a capacitação no manuseio e uso de carabinas na plataforma AR15, IA2 e FAL.",
    detail: ["50 cartuchos", "1 dia", "Para sócios e atiradores com CR"],
  },
  {
    src: campsImages[0].url,
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
  {
    src: campsImages[0].url, // Substitua pelo URL da imagem do novo curso
    title: "Curso de Home Defense",
    text: "Além de preparação para enfrentar eventos naturais, visa capacitar o proprietário de armas de fogo para sua utilização para defesa pessoal (personal protection) e para a defesa residencial (home defense) contra ameaças humanas.",
    detail: ["50 cartuchos", "1 dia", "Tudo incluso"],
  },
];

function ACourse() {
  return (
    <div className="text-white mt-28">
      <div className="ml-20 mr-20">
        <p className="text-[90px] text-center bebas_neue-font">
          Curso de Aprimoramento no Tiro
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-auto max-h-[20rem] w-auto flex items-center m-12 bg-white border border-gray-200 rounded-lg shadow  bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="origin-top-left px-4">
            <p className="text-[32px] montserrat-font">Conteudo:</p>
            <p className="text-[24px] inter-font">
              O curso de aprimoramento no tiro é o indicado para os que desejam
              melhorar no tiro esportivo ou de defesa, é uma experiência
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
        <p className="text-[80px] bebas_neue-font">
          Cursos presentes na Iniciação do Tiro:
        </p>
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
            <div className="flex flex-row justify-between gap-3 m-2">
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
                    <Image src={bullet} alt="bullet icon" className="w-16" />
                    <p className="py-1">{det}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-20">
        <p className="text-[38px] montserrat-font">
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
