import React from "react";

const CURSOS = [
  { text: "Fundamentos do Tiro", link: "/cursos/fundamentos-do-tiro" },
  { text: "Capacitação", link: "/cursos/capacitacao" },
  { text: "Armamento e Tiro", link: "/cursos/armamento-e-tiro" },
  { text: "Operador de Pistola", link: "/cursos/operador-pistola" },
  { text: "Atirador Esportivo", link: "/cursos/atirador-esportivo" },
  { text: "Tiro Tático Defensivo", link: "/cursos/tiro-tatico-defensivo" },
];

const INFORMAÇÕES = [
  { text: "Sobre Nós", link: "" },
  { text: "Instrutores", link: "link2" },
  { text: "Contato", link: "/contato" },
];

const AJUDA = [
  { text: "Regimento Interno", link: "link" },
  { text: "FAQ", link: "/faq" },
  { text: "O que é ser sócio", link: "/seja-socio" },
];

import { socialIcons } from "../context/context";

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
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-700 inter-font">
      <div className="container mx-auto py-8 flex justify-around">
        {/* Primeira coluna */}
        <div className="w-2/3 px-4 text-white text-center">
          <Link href="/cursos" className="mb-4 font-bold text-[25px]">
            Cursos
          </Link>
          <div className="grid grid-cols-3 gap-2">
            {CURSOS.map((curso, idx) => (
              <Link
                key={idx}
                className="text-zinc-400 text-[15px]"
                href={curso.link}
              >
                {curso.text}
              </Link>
            ))}
          </div>
          <div className="mb-4 mt-6 font-bold">Nossos Serviços</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="font-bold text-[25px]">Informações</div>
              <div className="grid grid-cols-2 gap-2">
                {INFORMAÇÕES.map((info, idx) => (
                  <Link
                    key={idx}
                    className="text-zinc-400 text-[15px]"
                    href={info.link}
                  >
                    {info.text}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-[25px]">Ajuda</div>
              <div className="grid grid-cols-2 gap-2">
                {AJUDA.map((help, idx) => (
                  <Link
                    key={idx}
                    className="text-zinc-400 text-[15px]"
                    href={help.link}
                  >
                    {help.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Segunda coluna */}
          <div className="grid grid-cols-2 gap-2 pt-10">
            <div className="grid grid-rows-2 gap-2">
              <h1 className="mb-4 font-bold text-[40px]">Contato</h1>
              <div className="mb-4 font-bold">
                Av. Dom Pedro I, 7231 - Taubaté/SP (The Place - Via Auto
                Shopping) CEP 12091-000
              </div>
            </div>
            <div className="grid grid-rows-4 gap-2 justify-center text-white">
              {CONTATOS.map((contato, idx) => (
                <Link
                  key={idx}
                  href={contato.link}
                  className="flex items-center"
                >
                  <Image
                    src={contato.src}
                    alt={contato.text + "ícone"}
                    className="w-6 h-6 mr-2"
                  />
                  <p>{contato.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Terceira coluna */}
        <div className="w-1/3 px-10 bg-gradient-to-b from-neutral-900 to-neutral-700 border-neutral-700 text-white inter-font">
          <div className="mb-4 font-bold text-[40px] text-center montserrat_classic-font">
            Fale Conosco
          </div>
          <form>
            <label className="block mb-2" htmlFor="name">
              Nome:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="block mt-4 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="email"
              id="email"
              name="email"
              required
            />
            <label className="block mt-4 mb-2" htmlFor="message">
              Mensagem:
            </label>
            <textarea
              className="w-full p-2 border rounded"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
            <div className="justify-center flex pt-2 pb-2">
              <button
                className="bg-[#BFAE95] text-center text-[22px] text-red-800 text-3xl px-10 py-1 font-extrabold hover:shadow-2xl"
                style={{
                  fontWeight: "bold",
                  border: "2px solid black",
                }}
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
