import React, { useState } from 'react';
import clubePhoto from '../public/images/clube.jpg'
import Image from 'next/image';
import SomeImage from "../public/images/SomeImage.png";
import Link from "next/link";
import { socialIcons } from "../context/context";
import { campsImages } from "../context/context";

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

const CAMPS = [
  {
    src: campsImages[0].url,
  }
];

function Championchips() {
  return (
    <div className="text-white mt-28">
    <div className="grid grid-cols-2 gap-3 pb-20">
            <div className="mr-2 pl-10 pt-10">
            <div className="pl-8 origin-top-left rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
                            <p className="text-[90px]">CAMPEONATOS</p>
                    </div>
                    <div className="origin-top-left mt-1 pb-28 pl-8 pt-10">
                            <p className="text-[32px]">Conteudo:</p>
                            <p className="text-[24px]">Todos os temas da cartilha de armamento e tiro da PF, elaborada pelo Serviço de Armamento e Tiro - SAT da Academia Nacional de Polícia.​</p>
                    </div>
            </div>
            <div className="ml-2 mt-36 pr-10 pt-10">
            <Image
                    src={SomeImage}
                />
            </div>
    </div>
    <div className="ml-20 mr-20">
              <p className="text-[80px]">Alguns campeonatos realizados em nosso estande:</p>
    </div>
    <div className="text-white">
                <div className="grid grid-cols-2 gap-3 pb-20">
                        <div className="mr-2 pl-10 pt-10">
                            {CAMPS.map((CAMPS, idx) => (
                                  <Image
                                    key={idx}
                                    src={CAMPS.src}
                                    className="w-full h-full mr-2"
                                  />
                              ))}
                        </div>
                        <div className="mr-2 pr-10 pt-10">
                            {CAMPS.map((CAMPS, idx) => (
                                  <Image
                                    key={idx}
                                    src={CAMPS.src}
                                    className="w-full h-full mr-2"
                                  />
                              ))}
                        </div>
                        <div className="mr-2 pl-10 pt-10">
                            {CAMPS.map((CAMPS, idx) => (
                                  <Image
                                    key={idx}
                                    src={CAMPS.src}
                                    className="w-full h-full mr-2"
                                  />
                              ))}
                        </div>
                        <div className="mr-2 pr-10 pt-10">
                            {CAMPS.map((CAMPS, idx) => (
                                  <Image
                                    key={idx}
                                    src={CAMPS.src}
                                    className="w-full h-full mr-2"
                                  />
                              ))}
                        </div>
                </div>
        </div>
        <div className="ml-20 mr-20">
          <p className="text-[38px]">Fique ligado em nossas redes sociais para sempre receberas atualizações, como datas e inscrições para futuros campeonatos!!</p>
        </div>
        <div className="pt-20 pb-10 flex justify-around items-center space-x-4 w-full pl-3">
        {CONTATOS.map((contato, idx) => (
                <Link
                  key={idx}
                  href={contato.link}
                  className="flex items-center"
                >
                  <Image
                    src={contato.src}
                    alt={contato.text + "ícone"}
                    className="w-10 h-10 mr-2"
                  />
                  <p className="text-[24px]">{contato.text}</p>
                </Link>
              ))}
        </div>
</div>
  );
};

export default Championchips;
