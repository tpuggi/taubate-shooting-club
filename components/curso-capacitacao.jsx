import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "@/context/context";
import SomeImage from "@/public/images/clube.jpg";
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

const CONTEUDO = [
  {
    title: "AULA TEÓRICA",
    image: "",
    bullets: [
      "CONDUTA NO ESTANDE",
      "NORMAS DE SEGURANÇA",
      "LEGISLAÇÃO BRASILEIRA",
      "NOMENCLATURA DE PEÇAS",
      "FUNCIONAMENTO DAS PEÇAS",
    ],
  },
  {
    title: "AULA PRÁTICA",
    image: "",
    bullets: [
      "20 TIROS",
      "ARMA LONGA",
      "ARMAS CURTAS",
      "DEFESA PESSOAL",
      "ALMA LISA E RAIADA",
    ],
  },
  {
    title: "SIMULADO",
    image: "",
    bullets: [
      "MÍNIMO DE 60%",
      "PRÁTICA DE TIRO",
      "DURAÇÃO: 2 HORAS",
      "20 QUESTÕES TEÓRICAS",
    ],
  },
];

export default function capacitacao() {
  return (
    <div className="text-white mt-12">
      <div className="mx-20">
        <p className="text-[90px] text-center bebas_neue-font">
          Curso de Capacitação
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 py-10">
        <div className="h-auto max-h-[20rem] w-auto flex items-center m-12 border border-gray-700 rounded-lg shadow bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="origin-top-left px-4">
            <p className="text-[32px] montserrat_classic-font">Objetivo:</p>
            <p className="text-[24px] inter-font">
              O curso tem como prioridade{" "}
              <strong className="text-[30px]">qualificar</strong> o aluno para a
              prova de capacidade técnica aplicada por Instrutor de Armamento e
              Tiro da Polícia Federal (IAT/PF).
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={SomeImage} alt="imagem capacitação" />
        </div>
      </div>
      <div className="mx-20">
        <p className="text-[80px] bebas_neue-font">Conteúdo: </p>
      </div>
      <div className="px-6 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-9 pb-10">
        {CONTEUDO.map((conteudo, index) => (
          <div
            key={index}
            className=""
            data-aos={`fade-${
              index % 3 == 0 ? "right" : index % 3 == 1 ? "up" : "left"
            }`}
          >
            <div className="origin-top-left bg-gradient-to-b to-neutral-900 from-red-800 rounded-t-[10px] p-3 ">
              <p className="text-[32px] bebas_neue-font text-center">
                {conteudo.title}
              </p>
            </div>
            <div className="">
              <Image src={conteudo.image} alt={conteudo.title} />
            </div>
            <div className="origin-top-left mt-1 p-6 pb-12 bg-red-800">
              <div className="text-[22px] bebas_neue-font items-start justify-center flex flex-col">
                {conteudo.bullets.map((bull, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-right"
                    data-aos-delay="500"
                    className="flex flex-nowrap justify-center items-center"
                  >
                    <div className="items-center justify-between flex">
                      <Image src={bullet} alt="bullet icon" className="w-16" />
                    </div>
                    <p className="pl-2">{bull}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
