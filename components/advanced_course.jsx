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
      "Fique ligado em nossas redes sociais para sempre receber as atualizações, como datas e inscrições  para futuros campeonatos!!",
  },
];

const CAMP1 = [
    {
      src: campsImages[0].url,
      title: "Operador de Pistola",
      text: (
        <>
          O Curso de operador de pistola é destinado aqueles que querem aprimorar suas técnicas e os fundamentos com pistola, visando melhorar velocidade e precisão.
        </>
      ),
    },
  ];
  
  const CAMP2 = [
    {
      src: campsImages[1].url,
      title: "Curso de Armamento e Tiro",
      text: (
        <>
          O curso tem como prioridade construir ou ampliar os conhecimentos do aluno para a utilização consciente e eficaz de armas de fogo.
        </>
      ),
    },
  ];
  
  const CAMP3 = [
    {
      src: campsImages[1].url,
      title: "Curso de Tiro Tático Defensivo",
      text: (
        <>
          O objetivo do Curso de Tiro Tático Defensivo é preparar o aluno, que já frequentou cursos de tiro e que deseja usar sua arma de fogo para defesa pessoal, ampliando seus conhecimentos. As aulas teóricas e práticas são ministradas por instrutores de times táticos da Marinha do Brasil, Polícia Civil e Polícia Rodoviária Federal, com ampla experiência em confrontos urbanos e rurais.
        </>
      ),
    },
  ];
  
  const CAMP4 = [
    {
      src: campsImages[0].url,
      title: "Curso De Operador De Fuzil",
      text: (
        <>
          Visa a capacitação no manuseio e uso de carabinas na plataforma AR15, IA2 e FAL.
        </>
      ),
    },
  ];
  
  const CAMP5 = [
    {
      src: campsImages[0].url,
      title: "Curso de Operador de Espingarda",
      text: (
        <>
          Visa a capacitação no manuseio e uso de Espingardas de repetição e semi-automáticas.
        </>
      ),
    },
  ];
  
  const CAMP6 = [
    {
      src: campsImages[1].url, // Substitua pelo URL da imagem do novo curso
      title: "Curso de Operador de Duas Armas",
      text: (
        <>
          Pistola/Fuzil – Pistola/Espingarda. A combinação efetiva de armamentos aliada à aplicação perfeita de técnicas de operação. Seja eficaz e sobreviva a eventos violentos utilizando em sintonia os armamentos disponíveis.
        </>
      ),
    },
  ];
  
  const CAMP7 = [
    {
      src: campsImages[0].url, // Substitua pelo URL da imagem do novo curso
      title: "Curso de Home Defense",
      text: (
        <>
          Além de preparação para enfrentar eventos naturais, visa capacitar o proprietário de armas de fogo para sua utilização para defesa pessoal (personal protection) e para a defesa residencial (home defense) contra ameaças humanas.
        </>
      ),
    },
  ];
  

const conteudoPrincipal = [
  {
    title: "Curso de Aprimoramento no Tiro",
    subTitle: "Conteudo:",
    text: "O curso de aprimoramento no tiro é o indicado para os que desejam melhorar no tiro esportivo ou de defesa, é uma experiência fundamental para habilitar ou capacitar o uso mais assertivo de armas de fogo.",
    src: conteudoCamps[1].url,
  },
  {
    title2: "Cursos presentes na Iniciação do Tiro:",
  },
];

function ACourse() {
    return (
      <div className="text-white mt-28">
        <div className="grid grid-cols-2 gap-3 pb-20">
          <div className="mr-2 pl-10 pt-10">
            <div className="origin-top-left rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
              {conteudoPrincipal.map((conteudoPrincipal, idx) => (
                <p className="text-[90px] bebas_neue-font" key={idx}>
                  {conteudoPrincipal.title}
                </p>
              ))}
            </div>
            <div className="origin-top-left mt-1 pb-28 pl-8 pt-10">
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
  
          <div className="ml-2 mt-36 pr-10 pt-10">
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
            {CAMP1.map((CAMP1, idx) => (
              <div className="mr-1 pl-10 pt-10 bg-red-800" key={idx}>
                <div>
                  <p className="text-[32px] pb-6 bebas_neue-font">{CAMP1.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-2">
                  <Image
                    src={CAMP1.src}
                    className="w-100 h-100"
                    alt={CAMP1.title}
                    key={idx}
                  />
                  <div>
                    <div>
                      <p className="text-[15px] pl-7 inter-font">{CAMP1.text}</p>
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
                        <p>100 cart.</p>
                        <p className="pt-1">9H</p>
                        <p className="pt-1">Exercícios</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {CAMP2.map((CAMP2, idx) => (
              <div className="mr-1 pl-10 pt-10 bg-red-800" key={idx}>
                <div>
                  <p className="text-[32px] pb-6 bebas_neue-font">{CAMP2.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-2">
                  <Image
                    src={CAMP2.src}
                    alt={CAMP2.title}
                    className="w-100 h-100"
                    key={idx}
                  />
                  <div>
                    <div>
                      <p className="text-[15px] pl-7 inter-font">{CAMP2.text}</p>
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
                      <div className="bebas_neue_font text-[28px]">
                        <p>6H</p>
                        <p className="pt-1">80 disparos</p>
                        <p className="pt-1">Diversas Armas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {CAMP3.map((CAMP3, idx) => (
              <div className="mr-1 pl-10 pt-10 bg-red-800" key={idx}>
                <div>
                  <p className="text-[32px] pb-6 bebas_neue-font">{CAMP3.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-2">
                  <Image
                    src={CAMP3.src}
                    alt={CAMP3.title}
                    className="w-100 h-100"
                    key={idx}
                  />
                  <div>
                    <div>
                      <p className="text-[15px] pl-7 inter-font">{CAMP3.text}</p>
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
                        <p>16H</p>
                        <p className="pt-1">150 Disparos</p>
                        <p className="pt-1">Diversos Calibres</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {CAMP4.map((CAMP4, idx) => (
              <div className="mr-1 pl-10 pt-10 bg-red-800" key={idx}>
                <div>
                  <p className="text-[32px] pb-6 bebas_neue-font">{CAMP4.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-2">
                  <Image
                    src={CAMP4.src}
                    alt={CAMP4.title}
                    className="w-100 h-100"
                    key={idx}
                  />
                  <div>
                    <div>
                      <p className="text-[15px] pl-7 inter-font">{CAMP4.text}</p>
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
            {/* Adicione os cursos CAMP5, CAMP6 e CAMP7 aqui */}
            {CAMP5.map((CAMP5, idx) => (
              <div className="mr-1 pl-10 pt-10 bg-red-800" key={idx}>
                <div>
                  <p className="text-[32px] pb-6 bebas_neue-font">{CAMP5.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-2">
                  <Image
                    src={CAMP5.src}
                    alt={CAMP5.title}
                    className="w-100 h-100"
                    key={idx}
                  />
                  <div>
                    <div>
                      <p className="text-[15px] pl-7 inter-font">{CAMP5.text}</p>
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
                        {/* Atualize os detalhes do curso CAMP5 aqui */}
                        <p>1 DIA</p>
                        <p className="pt-1">30 Cart.</p>
                        <p className="pt-1">CR. Obrigatório</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {CAMP6.map((CAMP6, idx) => (
              <div className="mr-1 pl-10 pt-10 bg-red-800" key={idx}>
                <div>
                  <p className="text-[32px] pb-6 bebas_neue-font">{CAMP6.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-2">
                  <Image
                    src={CAMP6.src}
                    alt={CAMP6.title}
                    className="w-100 h-100"
                    key={idx}
                  />
                  <div>
                    <div>
                      <p className="text-[15px] pl-7 inter-font">{CAMP6.text}</p>
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
                        {/* Atualize os detalhes do curso CAMP6 aqui */}
                        <p>1 DIA</p>
                        <p className="pt-1">30 Cart.</p>
                        <p className="pt-1">CR. Obrigatório</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {CAMP7.map((CAMP7, idx) => (
              <div className="mx-auto mr-1 pl-10 pt-10 bg-red-800" key={idx}>
                <div>
                  <p className="text-[32px] pb-6 bebas_neue-font">{CAMP7.title}</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-2">
                  <Image
                    src={CAMP7.src}
                    alt={CAMP7.title}
                    className="w-100 h-100"
                    key={idx}
                  />
                  <div>
                    <div>
                      <p className="text-[15px] pl-7 inter-font">{CAMP7.text}</p>
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
                        {/* Atualize os detalhes do curso CAMP7 aqui */}
                        <p>1 DIA</p>
                        <p className="pt-1">50 Cart</p>
                        <p className="pt-1">Conteúdos Diversos p/ Sobrevivência</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
  

export default ACourse;
