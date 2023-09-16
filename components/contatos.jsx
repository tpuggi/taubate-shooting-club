import Image from "next/image";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";
import { useEffect, useState } from "react";
import { socialIcons } from "../context/context";

// pages/index.js
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/mapaTSC"), {
  ssr: false,
});
// import Map from "../components/mapaTSC";

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

function Contatos() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 pb-20 pt-32"
      data-aos="fade-down"
    >
      <div className="ml-2 pl-10 pt-10 pr-10">
        <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3 text-white">
          <p className="text-[32px] bebas_neue-font text-center">
            Nossos contatos e meios de comunicação:
          </p>
        </div>
        <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-18 text-white grid grid-cols-2 gap-3">
          <div className="text-[22px]">
            <p className="mb-4 inter-font">
              • Nosso clube é o primeiro a ser instalado no Shopping (Via Auto
              Shopping), possuindo amplo estacionamento, fácil acesso e
              segurança.
            </p>
            <p className="inter-font">
              • Horário de Funcionamento 13h - 19h, de segunda à sexta-feira, e
              sábado das 10h às 18h aos sábados. Domingos são reservados para
              treinamentos e competições.{" "}
            </p>
          </div>
          <div className="pl-8 text-[22px]">
            {CONTATOS.map((contato, idx) => (
              <Link
                key={idx}
                href={contato.link}
                className="flex items-center mb-10"
              >
                <Image
                  src={contato.src}
                  alt={contato.text + "ícone"}
                  className="w-6 h-6 mr-2"
                />
                <p>{contato.text}</p>
              </Link>
            ))}
            <p className="text-[22px] inter-font">
              Nos siga pelas redes sociais!
            </p>
          </div>
        </div>
      </div>
      <div className="pl-10 pt-10 pr-20">
        <Map />
        <p className="text-[22px] text-white pt-10 inter-font">
          Av. Dom Pedro I, 7231 - Shopping The PLace (Via Auto Shopping) -
          Estoril, Taubaté SP, 12091-000
        </p>
      </div>
    </div>
  );
}

export default Contatos;
