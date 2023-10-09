import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const CURSOS = [
  { text: "Capacitação", link: "/capacitacao_course" },
  { text: "Fundamentos do Tiro", link: "/basic_course" },
  { text: "Atirador Esportivo", link: "/basic_course" },
  { text: "Home Defense", link: "/basic_course" },
  { text: "Tiro Tático Defensivo", link: "/advanced_course" },
  { text: "Armamento e Tiro", link: "/advanced_course" },
  { text: "Operador de Pistola", link: "/advanced_course" },
  { text: "Operador de Fuzil", link: "/advanced_course" },
  { text: "Operador de Espingarda", link: "/advanced_course" },
  { text: "Operador de Duas Armas", link: "/advanced_course" },
];

const INFORMAÇÕES = [
  { text: "Contato", link: "/contatos" },
  { text: "Campeonatos", link: "/campeonatos" },
  { text: "Calendário", link: "/calendar" },
  { text: "Ranking", link: "/ranking" },
];

const AJUDA = [
  {
    text: "Regimento Interno",
    link: "/contexts/regimento-interno/regimento-interno.pdf",
  },
  { text: "FAQ", link: "/faq" },
  { text: "O que é ser sócio", link: "/sejaSocio" },
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

const Footer = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-700 inter-font">
      <div className="container mx-auto py-8 flex flex-wrap justify-around">
        {/* Primeira coluna */}
        <div className="md:w-2/3 px-4 text-white flex flex-wrap justify-between md:grid md:grid-rows-2">
          <div className="md:h-2/3 px-4 text-white flex flex-wrap justify-around">
            <div className="my-2">
              <Link href="/cursos" className="mb-2 font-bold text-[25px]">
                Cursos
              </Link>
              <div className="grid grid-rows-n gap-2">
                {CURSOS.map((curso, idx) => (
                  <Link
                    key={idx}
                    className="text-zinc-400 text-[15px] hover:text-zinc-300"
                    href={curso.link}
                  >
                    {curso.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="my-2">
              <div className="font-bold mb-2 text-[25px]">Informações</div>
              <div className="md:grid md:grid-rows-n flex flex-wrap gap-2">
                {INFORMAÇÕES.map((info, idx) => (
                  <Link
                    key={idx}
                    className="text-zinc-400 text-[15px] hover:text-zinc-300"
                    href={info.link}
                  >
                    {info.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="my-2">
              <div className="font-bold text-[25px]">Ajuda</div>
              <div className="grid grid-rows-n gap-2">
                {AJUDA.map((help, idx) => (
                  <Link
                    key={idx}
                    className="text-zinc-400 text-[15px] hover:text-zinc-300"
                    href={help.link}
                  >
                    {help.text}
                  </Link>
                ))}
              </div>
              <Link
                href={{
                  pathname: "/",
                  query: { id: "targetElement" },
                }}
                className="mt-5 text-[20px] font-bold text-white-400 hover:text-white-200"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 flex flex-wrap gap-2 pt-10 pb-5">
            <div className="md:grid md:grid-rows-2 text-center gap-2">
              <h1 className="mb-4 font-bold text-[40px]">Contato</h1>
              <div className="mb-4 font-bold">
                Av. Dom Pedro I, 7231 - Taubaté/SP (The Place - Via Auto
                Shopping) CEP 12091-000
              </div>
            </div>
            <div className="md:grid md:grid-rows-4 flex flex-wrap gap-2 justify-center text-white">
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

        {/* Segunda coluna */}
        <div className="md:w-1/3 px-10 bg-gradient-to-b from-neutral-900 to-neutral-700 border-neutral-700 text-white inter-font items-center justify-center">
          <div className="mb-4 font-bold text-[40px] text-center montserrat_classic-font">
            Fale Conosco
          </div>
          <form>
            <label className="block mb-2" htmlFor="name">
              Nome:
            </label>
            <input
              className="w-full p-2 border rounded text-black"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              required
            />
            <label className="block mt-4 mb-2" htmlFor="telefone">
              Telefone:
            </label>
            <input
              className="w-full p-2 border rounded text-black"
              placeholder="Seu telefone"
              type="text"
              id="telefone"
              name="telefone"
              required
            />
            <label className="block mt-4 mb-2" htmlFor="message">
              Mensagem:
            </label>
            <textarea
              className="w-full p-2 border rounded text-black"
              placeholder="Eu gostaria de aprender a atirar ou tirar certificação para poder atirar"
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
            <div className="justify-center flex pt-2 pb-2">
              <Link
                className="bg-[#BFAE95] text-center text-[22px] text-red-800 text-3xl px-10 py-1 font-extrabold hover:shadow-2xl"
                style={{
                  fontWeight: "bold",
                  border: "2px solid black",
                }}
                href={`https://wa.me/12997359612?text="Eu sou ${name}, ${message}"`}
              >
                ENVIAR
              </Link>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
