import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialIcons, campsImages, medalIcons } from "../context/context";
import { conteudoCamps } from "../context/context";

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

const CAMPEONATOS = [
  {
    src: campsImages[0].url,
    title: "Torneio Buscapé",
    text: (
      <>
        Carabina é uma arma de fogo mais curta que o fuzil, tendo entre 1,0 e
        1,2 metro de comprimento muito usada em <strong>caça</strong> e tiro
        desportivo podendo ser de diversos calibres. Antigamente, designava uma
        versão mais curta do <strong>fuzil de infantaria</strong> a ser
        empregada por tropas de cavalaria.
      </>
    ),
  },
  {
    src: campsImages[1].url,
    title: "Torneio Buscapé",
    text: (
      <>
        Carabina é uma arma de fogo mais curta que o fuzil, tendo entre 1,0 e
        1,2 metro de comprimento muito usada em <strong>caça</strong> e tiro
        desportivo podendo ser de diversos calibres. Antigamente, designava uma
        versão mais curta do <strong>fuzil de infantaria</strong> a ser
        empregada por tropas de cavalaria.
      </>
    ),
  },
  {
    src: campsImages[1].url,
    title: "Torneio Buscapé",
    text: (
      <>
        Carabina é uma arma de fogo mais curta que o fuzil, tendo entre 1,0 e
        1,2 metro de comprimento muito usada em <strong>caça</strong> e tiro
        desportivo podendo ser de diversos calibres. Antigamente, designava uma
        versão mais curta do <strong>fuzil de infantaria</strong> a ser
        empregada por tropas de cavalaria.
      </>
    ),
  },
  {
    src: campsImages[0].url,
    title: "Torneio Buscapé",
    text: (
      <>
        Carabina é uma arma de fogo mais curta que o fuzil, tendo entre 1,0 e
        1,2 metro de comprimento muito usada em <strong>caça</strong> e tiro
        desportivo podendo ser de diversos calibres. Antigamente, designava uma
        versão mais curta do <strong>fuzil de infantaria</strong> a ser
        empregada por tropas de cavalaria.
      </>
    ),
  },
];
function Championchips() {
  return (
    <div className="text-white my-12" data-aos="fade-up">
      <div className="mx-5">
        <p className="text-[4em] text-center bebas_neue-font">CAMPEONATOS</p>
      </div>
      <div className="md:grid md:grid-cols-2 gap-3 py-10 flex flex-wrap-reverse">
        <div
          className="h-auto max-h-[20rem] w-auto flex items-center md:m-12 m-6 p-6 border border-gray-700 rounded-lg shadow bg-gradient-to-b from-neutral-700 to-neutral-900"
          data-aos="flip-right"
        >
          <div className="origin-top-left md:px-4">
            <p className="md:text-[2.5em] text-[2em]  montserrat_classic-font">
              Conteudo:
            </p>
            <p className="md:text-[1.4em] text-[1em] inter-font">
              Todos os temas da cartilha de armamento e tiro da PF, elaborada
              pelo Serviço de Armamento e Tiro - SAT da Academia Nacional de
              Polícia.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-10" data-aos="flip-left">
          <Image src={conteudoCamps[1].url} alt="CAMPEONATOS" />
        </div>
      </div>
      <div className="mx-10">
        <p className="text-[3em] md:text-[80px] bebas_neue-font md:text-center">
          Alguns campeonatos realizados em nosso estande:
        </p>
      </div>
      <div
        className="md:grid md:grid-cols-2 flex flex-wrap gap-3 m-10"
        data-aos="fade-down"
      >
        {CAMPEONATOS.map((campeonato, idx) => (
          <div
            className="p-4 bg-red-800 border border-gray-700"
            key={idx}
            data-aos="fade-up"
            data-aos-delay={200 + 80 * idx}
          >
            <div className="pb-2">
              <p className="text-[32px] text-center bebas_neue-font">
                {campeonato.title}
              </p>
            </div>
            <div className="flex flex-wrap md:grid md:grid-cols-2 gap-3 m-2">
              <Image
                src={campeonato.src}
                className="self-center h-full"
                alt={campeonato.title}
              />
              <div>
                <div>
                  <p className="text-[90%] inter-font">{campeonato.text}</p>
                </div>
                <div className="pt-5 grid grid-rows-3 bebas_neue-font text-[28px]">
                  {medalIcons.map((medal, index) => (
                    <div className="grid grid-cols-2" key={index}>
                      <Image
                        src={medal.url}
                        alt={index + "° Lugar"}
                        className="pt-2 pl-7 w-20"
                      />
                      <p className="items-center flex">{index + 1} lugar</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:mx-10 mx-2 mb-5 text-center">
        <p className="md:text-[2.5em] text-[1em] montserrat_classic-font flex">
          Fique ligado em nossas redes sociais para sempre receber as
          atualizações, como datas e inscrições para futuros campeonatos!!
        </p>
      </div>
      <div className="md:grid md:grid-cols-4 flex flex-wrap gap-4 justify-center text-white">
        {CONTATOS.map((contato, idx) => (
          <Link
            key={idx}
            href={contato.link}
            className="flex items-center justify-center"
          >
            <Image
              src={contato.src}
              alt={contato.text + "ícone"}
              className="w-6 h-6 mx-2 md:w-12 md:h-12"
            />
            <p>{contato.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Championchips;
