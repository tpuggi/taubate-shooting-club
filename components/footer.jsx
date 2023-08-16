/* 2 colunas
    primeira coluna com duas linhas
        primeira linha com mais3 linhas 
            primeira linha com mais 2 linhas
                primeira linha com o título Cursos
                segunda linha com um grid de links para os cursos
            segunda linha com apenas um título "Nossos Serviços" 
            terceira linha com 2 colunas
                cada coluna com duas linhas, sendo um título e um grid de links
        segunda linha com duas colunas
            primeira coluna com duas linhas
                primeira linha com um títulozão "Contato"
                segunda linha com o endereço
            segunda coluna com 4 linhas
                cada linha tem um ícone e um texto
    
    segunda coluna com um formulário em uma divzona, isso fará um email por meio de protocolo TCP-IP
*/

import React from "react";

const CURSOS = [
  { text: "Fundamentos do Tiro", link: "link" },
  { text: "Capacitação", link: "link" },
  { text: "Curso 3", link: "link" },
  { text: "Curso 4", link: "link" },
  { text: "Curso 4", link: "link" },
];

const INFORMAÇÕES = [
  { text: "Curso 5", link: "link" },
  { text: "Curso 5", link: "link" },
  { text: "Curso 5", link: "link" },
];

const AJUDA = [
  { text: "Curso 5", link: "link" },
  { text: "Curso 5", link: "link" },
  { text: "Curso 5", link: "link" },
];

import socialIcons from "../context/social-icons";

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
          <div className="mb-4 font-bold text-[25px]">Cursos</div>
          <div className="grid grid-cols-3 gap-2">
            {CURSOS.map((curso, idx) => (
              <Link className="text-zinc-400 text-[15px]" href={curso.link}>
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
                  <Link className="text-zinc-400 text-[15px]" href={info.link}>
                    {info.text}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-[25px]">Ajuda</div>
              <div className="grid grid-cols-2 gap-2">
                {AJUDA.map((help, idx) => (
                  <Link className="text-zinc-400 text-[15px]" href={help.link}>
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
                <Link href={contato.link} className="flex items-center">
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
        <div className="w-1/3 px-10 bg-zinc-800 text-white inter-font">
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
                className="bg-[#BFAE95] text-center montserrat_classic-font text-red-800 text-3xl pr-20 pl-20 font-extrabold hover:shadow-2xl"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

const Footers = () => {
  return (
    <div className="w-[1440px] h-[737px] relative bg-gradient-to-b from-neutral-900 to-neutral-700">
      <div className="w-[527px] h-[608px] left-[831px] top-[84px] absolute bg-zinc-800">
        <div className="w-[254.01px] h-[25.25px] left-[137.02px] top-[40.79px] absolute text-center text-white text-[40px] font-bold">
          SEJA SÓCIO
        </div>
        <div className="w-[368.90px] h-[0px] left-[79.10px] top-[410.85px] absolute border border-white"></div>
        <div className="w-[368.90px] h-[0px] left-[79.10px] top-[288.95px] absolute border border-white"></div>
        <div className="w-[89.79px] h-[16.55px] left-[79.10px] top-[341.62px] absolute text-white text-2xl font-bold">
          Email
        </div>
        <div className="w-[89.79px] h-[16.55px] left-[79.10px] top-[219.72px] absolute text-white text-2xl font-bold">
          Email
        </div>
        <div className="w-[210.59px] h-[24.08px] left-[79.10px] top-[380.75px] absolute text-white text-[15px] font-bold">
          email@email.com
        </div>
        <div className="w-[210.59px] h-[24.08px] left-[79.10px] top-[258.85px] absolute text-white text-[15px] font-bold">
          email@email.com
        </div>
      </div>
      <div className="w-[169px] h-[26px] left-[339px] top-[434px] absolute">
        <div className="w-[243px] left-[84px] top-[177px] absolute">
          <img
            className="w-[42px] h-[42px] left-0 top-0 absolute"
            src="https://via.placeholder.com/42x42"
          />
          <div className="w-[187px] h-3 left-[56px] top-[15px] absolute text-white text-[15px] font-bold">
            taubateshootingclub
          </div>
        </div>
        <div className="w-[242px] left-[84px] top-[116px] absolute">
          <img
            className="w-[42px] h-[42px] left-0 top-0 absolute"
            src="https://via.placeholder.com/42x42"
          />
          <div className="w-[187px] h-3 left-[55px] top-[15px] absolute text-white text-[15px] font-bold">
            Taubate Shooting Club
          </div>
        </div>
        <div className="w-[215px] left-[84px] top-[-6px] absolute">
          <div className="w-40 h-4 left-[55px] top-[13px] absolute text-white text-[15px] font-bold">
            (12) 3681-4106{" "}
          </div>
        </div>
        <div className="w-[215px] h-[42px] left-[84px] top-[55px] absolute">
          <div className="w-40 h-4 left-[55px] top-[13px] absolute text-white text-[15px] font-bold">
            (12) 99735-9612
          </div>
        </div>
        <div className="w-[285px] h-[53px] left-[-235px] top-[130px] absolute text-white text-[15px] font-bold">
          Av. Dom Pedro I, 7231 - Taubaté/SP
          <br />
          (The Place - Via Auto Shopping)
          <br />
          CEP 12091-000
        </div>
        <div className="left-[-211px] top-[41px] absolute text-center text-white text-[40px] font-bold">
          CONTATO
        </div>
      </div>
      <div className="w-[576px] h-[302px] left-[90px] top-[86px] absolute">
        <div className="w-[197.27px] h-[92.25px] left-[327px] top-[176px] absolute">
          <div className="w-[128.07px] h-[12.70px] left-[69.20px] top-[79.55px] absolute text-zinc-400 text-[15px] font-normal">
            O que é ser sócio
          </div>
          <div className="w-[39.25px] h-[12.70px] left-0 top-[79.55px] absolute text-zinc-400 text-[15px] font-normal">
            FAQ
          </div>
          <div className="w-[164.22px] h-2.5 left-[14.46px] top-[38.73px] absolute text-center text-zinc-400 text-[15px] font-normal">
            Regimento Interno
          </div>
          <div className="w-[76px] h-5 left-[59px] top-0 absolute text-white text-[25px] font-bold">
            Ajuda
          </div>
        </div>
        <div className="w-[213.81px] h-[91.25px] left-[41px] top-[176px] absolute">
          <div className="w-[100.97px] h-[12.70px] left-[102.03px] top-[37.73px] absolute text-zinc-400 text-[15px] font-normal">
            Instrutores
          </div>
          <div className="w-[100.97px] h-[12.70px] left-[102.03px] top-[78.55px] absolute text-zinc-400 text-[15px] font-normal">
            Contato
          </div>
          <div className="w-[100.97px] h-[12.70px] left-0 top-[78.55px] absolute text-zinc-400 text-[15px] font-normal">
            Endereço
          </div>
          <div className="w-[100.97px] h-[12.70px] left-[1.06px] top-[37.73px] absolute text-zinc-400 text-[15px] font-normal">
            Sobre nós
          </div>
          <div className="w-[199.81px] h-5 left-[14px] top-0 absolute text-white text-[25px] font-bold">
            Informações
          </div>
        </div>
        <div className="w-[498px] h-[125px] left-[48px] top-[17px] absolute">
          <div className="w-[476px] h-3.5 left-0 top-[111px] absolute text-center text-white text-xl font-semibold">
            Nossos Serviços
          </div>
          <div className="w-[172px] h-3.5 left-[326px] top-[62px] absolute text-zinc-400 text-[15px] font-normal">
            Atirador Esportivo
          </div>
          <div className="w-[172px] h-3.5 left-[326px] top-[37px] absolute text-zinc-400 text-[15px] font-normal">
            Tiro Tático Defensivo
          </div>
          <div className="w-[172px] h-3.5 left-[172px] top-[62px] absolute text-zinc-400 text-[15px] font-normal">
            Operador de Pistola
          </div>
          <div className="w-[172px] h-3.5 left-[172px] top-[37px] absolute text-zinc-400 text-[15px] font-normal">
            Armamento e Tiro
          </div>
          <div className="w-[95px] h-3.5 left-0 top-[62px] absolute text-zinc-400 text-[15px] font-normal">
            Capacitação
          </div>
          <div className="w-[172px] h-3.5 left-0 top-[37px] absolute text-zinc-400 text-[15px] font-normal">
            Fundamentos do Tiro
          </div>
          <div className="w-[97px] h-[22px] left-[190px] top-0 absolute text-white text-[25px] font-bold">
            Cursos
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
