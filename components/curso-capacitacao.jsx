import Image from "next/image";
import Link from "next/link";
import { socialIcons, capacitacaoCourse } from "@/context/context";
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
    image: capacitacaoCourse[0].url,
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
    image: capacitacaoCourse[1].url,
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
    image: capacitacaoCourse[2].url,
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
    <div className="text-white mt-12" data-aos="fade-up">
      <div className="mx-10">
        <p className="text-[4em] text-center bebas_neue-font">
          Curso de Capacitação
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 gap-3 py-10 flex flex-wrap-reverse">
        <div
          className="h-auto max-h-[20rem] w-auto flex items-center md:m-12 m-6 p-6 border border-gray-700 rounded-lg shadow bg-gradient-to-b from-neutral-700 to-neutral-900"
          data-aos="flip-right"
        >
          <div className="origin-top-left md:px-4">
            <p className="md:text-[2.5em] text-[2em] montserrat_classic-font">
              Objetivo:
            </p>
            <p className="md:text-[1.4em] text-[1em] inter-font">
              O curso tem como prioridade{" "}
              <strong className="text-[1.4em] md:text-[2em]">qualificar</strong>{" "}
              o aluno para a prova de capacidade técnica aplicada por Instrutor
              de Armamento e Tiro da Polícia Federal (IAT/PF).
            </p>
          </div>
        </div>
        <div className="flex justify-center" data-aos="flip-left">
          <Image src={capacitacaoCourse[0].url} alt="imagem capacitação" />
        </div>
      </div>
      <div className="mx-20">
        <p className="text-[80px] bebas_neue-font text-center">Conteúdo: </p>
      </div>
      <div className="px-6 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-9 pb-10">
        {CONTEUDO.map((conteudo, index) => (
          <div key={index} data-aos="fade-up">
            <div className="origin-top-left bg-gradient-to-b to-neutral-900 from-red-800 rounded-t-[10px] p-3 ">
              <p className="text-[32px] bebas_neue-font text-center">
                {conteudo.title}
              </p>
            </div>
            <div>
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
      </div>{" "}
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
