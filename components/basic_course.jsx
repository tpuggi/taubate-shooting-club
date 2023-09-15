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

const CAMP1 = [
  {
    src: campsImages[0].url,
    title: "Fundamentos no tiro",
    text: (
      <>
        O curso de fundamentos do tiro é o indicado para os que desejam iniciar no tiro esportivo ou de defesa, é uma experiência fundamental para habilitar ou capacitar ao uso de armas de fogo.
      </>
    ),
  },
];

const CAMP2 = [
  {
    src: campsImages[1].url,
    title: "Curso de capacitação",
    text: (
      <>
    O curso tem como prioridade qualificar o aluno para a prova de capacidade técnica aplicada por Instrutor de Armamento e Tiro da Polícia Federal (IAT/PF), sendo fundamental para a aquisição de armas pelo SINARM (PF) ou SIGMA (EB), renovação de registro de armas de fogo ou expedição de Certificado de Registro (CR) de Colecionador, Caçador ou Atirador (CAC).
      </>
    ),
  },
];

const CAMP3 = [
  {
    src: campsImages[1].url,
    title: "Curso de Atirador Esportivo",
    text: (
      <>
        O curso tem como prioridade, capacitar atiradores iniciantes para a prática do Tiro Defensivo (IDSC) ou Tiro Tático Dinâmico (TTD) em relação às técnicas do esporte e auxiliá-lo no seu desenvolvimento, corrigindo seus erros.
      </>
    ),
  },
];

const CAMP4 = [
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

const conteudoPrincipal = [
  {
    title: "Curso de Iniciação no Tiro",
    subTitle: "Conteudo:",
    text: "O curso de iniciação no tiro é o indicado para os que desejam iniciar no tiro esportivo ou de defesa, é uma experiência fundamental para habilitar ou capacitar ao uso de armas de fogo.",
    src: conteudoCamps[1].url,
  },
  {
    title2: "Cursos presentes na Iniciação do Tiro:",
  },
];

function Course() {
  return (
    <div className="text-white mt-28">
      <div className="ml-20 mr-20">
        {conteudoPrincipal.map((conteudoPrincipal, idx) => (
          <p className="text-[90px] text-center bebas_neue-font" key={idx}>
            {conteudoPrincipal.title}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-auto max-h-[20rem] w-auto flex items-center m-12 block bg-white border border-gray-200 rounded-lg shadow  bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="origin-top-left px-4">
            {conteudoPrincipal.map((conteudoPrincipal, idx) => (
              <p className="text-[32px] montserrat-font" key={idx}>
                {conteudoPrincipal.subTitle}
              </p>
            ))}
            {conteudoPrincipal.map((conteudoPrincipal, idx) => (
              <p className="text-[24px] inter-font" key={idx}>
                {conteudoPrincipal.text}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center py-10">
          {conteudoPrincipal.map((conteudoPrincipal, idx) => (
            <Image 
              src={conteudoPrincipal.src}
              alt={conteudoPrincipal.title}
              key={idx}
            />
          ))}
        </div>
      </div>
      <div className="ml-20 mr-20">
        {conteudoPrincipal.map((conteudoPrincipal, idx) => (
          <p className="text-[80px] bebas_neue-font" key={idx}>
            {conteudoPrincipal.title2}
          </p>
        ))}
      </div>
      <div className="text-white">
        <div className="grid grid-cols-2 gap-3 pb-20 m-10">
          <div className="mr-1 pl-10 pt-10  bg-red-800">
            <div>
              {CAMP1.map((CAMP1, idx) => (
                <p className="text-[32px] pb-6 bebas_neue-font" key={idx}>
                  {CAMP1.title}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 m-2">
              {CAMP1.map((CAMP1, idx) => (
                <Image
                  src={CAMP1.src}
                  className="w-100 h-100"
                  alt={CAMP1.title}
                  key={idx}
                />
              ))}
              <div>
                <div>
                  {CAMP1.map((CAMP1, idx) => (
                    <p className="text-[15px] pl-7 inter-font" key={idx}>
                      {CAMP1.text}
                    </p>
                  ))}
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
                    <p>Revólver</p>
                    <p className="pt-1">Pistola</p>
                    <p className="pt-1">Carabina</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-1 pl-10 pt-10  bg-red-800">
            <div>
              {CAMP2.map((CAMP2, idx) => (
                <p className="text-[32px] pb-6 bebas_neue-font" key={idx}>
                  {CAMP2.title}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 m-2">
              {CAMP2.map((CAMP2, idx) => (
                <Image
                  src={CAMP2.src}
                  alt={CAMP2.title}
                  className="w-100 h-100"
                  key={idx}
                />
              ))}
              <div>
                <div>
                  {CAMP2.map((CAMP2, idx) => (
                    <p className="text-[15px] pl-7 inter-font" key={idx}>
                      {CAMP2.text}
                    </p>
                  ))}
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
                  </div>
                  <div className="bebas_neue-font text-[28px]">
                    <p>2 Horas</p>
                    <p className="pt-1">60 disparos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-1 pl-10 pt-10  bg-red-800">
            <div>
              {CAMP3.map((CAMP3, idx) => (
                <p className="text-[32px] pb-6 bebas_neue-font" key={idx}>
                  {CAMP3.title}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 m-2">
              {CAMP3.map((CAMP3, idx) => (
                <Image
                  src={CAMP3.src}
                  alt={CAMP3.title}
                  className="w-100 h-100"
                  key={idx}
                />
              ))}
              <div>
                <div>
                  {CAMP3.map((CAMP3, idx) => (
                    <p className="text-[15px] pl-7 inter-font" key={idx}>
                      {CAMP3.text}
                    </p>
                  ))}
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
                  </div>
                  <div className="bebas_neue-font text-[28px]">
                    <p>1 dia</p>
                    <p className="pt-1">Teoria e Prática</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-1 pl-10 pt-10  bg-red-800">
            <div>
              {CAMP4.map((CAMP4, idx) => (
                <p
                  className="text-[32px] pb-6 bebas_neue-font"
                  alt={CAMP4.title}
                  key={idx}
                >
                  {CAMP4.title}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 m-2">
              {CAMP4.map((CAMP4, idx) => (
                <Image
                  src={CAMP4.src}
                  alt={CAMP4.title}
                  className="w-100 h-100"
                  key={idx}
                />
              ))}
              <div>
                <div>
                  {CAMP4.map((CAMP4, idx) => (
                    <p className="text-[15px] pl-7 inter-font" key={idx}>
                      {CAMP4.text}
                    </p>
                  ))}
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
        </div>
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
