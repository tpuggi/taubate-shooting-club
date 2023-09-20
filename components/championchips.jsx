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
    <div className="text-white mt-28">
      <div className="grid grid-cols-2 gap-3 pb-20">
        <div className="h-auto max-h-[20rem] w-auto flex items-center m-12 border border-gray-700 rounded-lg shadow  bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="origin-top-left px-4">
            <p className="text-[32px] montserrat_classic-font">Conteudo:</p>
            <p className="text-[24px] inter-font">
              Todos os temas da cartilha de armamento e tiro da PF, elaborada
              pelo Serviço de Armamento e Tiro - SAT da Academia Nacional de
              Polícia.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Image src={conteudoCamps[1].url} alt="CAMPEONATOS" />
        </div>
      </div>
      <div className="ml-20 mr-20">
        <p className="text-[80px] bebas_neue-font">
          Alguns campeonatos realizados em nosso estande:
        </p>
      </div>
      <div className="text-white">
        <div className="grid grid-cols-2 gap-3 pb-20 m-10">
          {CAMPEONATOS.map((campeonato, idx) => (
            <div className="mr-1 pl-10 pt-10  bg-red-800" key={idx}>
              <div>
                <p className="text-[32px] pb-6 bebas_neue-font">
                  {campeonato.title}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 m-2">
                <Image
                  src={campeonato.src}
                  className="w-100 h-100"
                  alt={campeonato.title}
                />
                <div>
                  <div>
                    <p className="text-[15px] pl-7 inter-font">
                      {campeonato.text}
                    </p>
                  </div>
                  <div className="pt-5 grid grid-cols-2">
                    <div>
                      <Image
                        src={bullet}
                        alt="bullet icon"
                        className="pt-2 pl-7 w-25 h-35"
                      />
                      <Image
                        src={bullet}
                        alt="bullet icon"
                        className="pt-6 pl-7 w-25 h-35"
                      />
                      <Image
                        src={bullet}
                        alt="bullet icon"
                        className="pt-6 pl-7 w-25 h-35"
                      />
                    </div>
                    <div className="bebas_neue-font text-[28px]">
                      <p>1 lugar</p>
                      <p className="pt-1">2 lugar</p>
                      <p className="pt-1">3 lugar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-20 mr-20">
        <p className="text-[38px] montserrat_classic-font">
          Fique ligado em nossas redes sociais para sempre receber atualizações,
          como datas e inscrições para futuros campeonatos!!
        </p>
      </div>
      <div className="pt-20 pb-10 flex justify-around items-center space-x-4 w-full pl-3">
        {CONTATOS.map((contato, idx) => (
          <Link href={contato.link} className="flex items-center" key={idx}>
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

export default Championchips;
