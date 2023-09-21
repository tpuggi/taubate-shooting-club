import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "../context/context";
import { advancedCourse } from "../context/context";
import Modal from "./modal";

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

const COURSES = [
  {
    src: advancedCourse[1].url,
    title: "Operador de Pistola",
    text: "O Curso de operador de pistola é destinado àqueles que querem aprimorar suas técnicas e os fundamentos com pistola, visando melhorar velocidade e precisão.",
    modal: {
      text: "Horário: Início às 09:00 horas - Término às 18:00 horas.",
      detail: [
        {
          title: "Conteúdo: ",
          text: (
            <ul>
              <li> • Regras Básicas de Segurança</li>
              <li> • Manuseio, Desmontagem, Conservação e Limpeza da Arma</li>
            </ul>
          ),
        },
        {
          title: "Diversos exercícios distribuídos sobre os seguintes tópicos",
          text: (
            <ul>
              <li> • Posições de Tiro</li>
              <li> • Giros e deslocamentos</li>
              <li> • Empunhadura/ Visada</li>
              <li> • Precisão, Saque e Recarga</li>
              <li> • Uso equilibrado da mão forte e mão de apoio</li>
              <li> • Solução de Panes</li>
            </ul>
          ),
        },
        {
          title: "Incluso: ",
          text: "Armamento, acessórios, munição, certificado e coffee break. Pré-requisito do curso: aberto para sócios e seus convidados e atiradores que possuam CR (Certificado de Registro) emitido pelo Exército Brasileiro.",
        },
      ],
    },
  },
  {
    src: advancedCourse[1].url,
    title: "Curso de Armamento e Tiro",
    text: "O curso tem como prioridade construir ou ampliar os conhecimentos do aluno para a utilização consciente e eficaz de armas de fogo.",
    modal: {
      text: "Duração: 6 horas - 100 disparos nos simuladores de tiro e 80 disparos no estande de tiro.",
      detail: [
        {
          title: "Objetivo: ",
          text: (
            <p>
              O curso tem como prioridade construir ou ampliar os conhecimentos
              do aluno para a utilização consciente e eficaz de armas de fogo. ​
              Você vai assimilar as regras internacionais de segurança, os
              fundamentos do tiro, comportamento no estande, conhecer tipos de
              armas e munições, noções de balística e legislação. ​ Você vai
              manusear revólveres, pistolas, carabinas e espingardas de diversos
              modelos e calibres e praticar nos simuladores da Laser Shot!
            </p>
          ),
        },
      ],
    },
  },
  {
    src: advancedCourse[1].url,
    title: "Curso de Tiro Tático Defensivo",
    text: "O objetivo do Curso de Tiro Tático Defensivo é preparar o aluno, que já frequentou cursos de tiro e que deseja usar sua arma de fogo para defesa pessoal, ampliando seus conhecimentos.",
    modal: {
      text: "DURAÇÃO: 16 horas - Mínimo de 150 disparos por aluno nos calibres 22LR, .38SPL, .357 Magnum, .380ACP, .40 S&W e .45ACP (12 gauge e .223Rem opcionais).",
      detail: [
        {
          title: "Objetivo: ",
          text: "O objetivo do Curso de Tiro Tático Defensivo é preparar o aluno, que já frequentou cursos de tiro e que deseja usar sua arma de fogo para defesa pessoal, ampliando seus conhecimentos.  As aulas teóricas e práticas são ministradas por instrutores de times táticos da Marinha do Brasil, Polícia Civil e Polícia Rodoviária Federal, com ampla experiência em confrontos urbanos e rurais.",
        },
        {
          title: "MANUSEIO DE ARMAS COM SEGURANÇA:",
          text: "Regras internacionais de segurança. Cuidados que toda arma de fogo exige para que não ocorram acidentes, desde o cuidado com as crianças, bem como carregar, descarregar, limpeza, guarda e porte. Comportamento no estande de tiro. Empunhadura, visada e prática de tiro seco.",
        },
        {
          title: "LEGISLAÇÃO:",
          text: "Conhecimento do manual de armamento e tiro do DPF para registro de arma de fogo, porte e transporte de armas de fogo. Noções Jurídicas: tipos de crime, exclusão de criminalidade, crime doloso, crime culposo, imprudência, negligência, imperícia, estado de necessidade, legítima defesa, estrito cumprimento do dever legal, exercício regular de direito, crimes contra o patrimônio.",
        },
        {
          title: "BALÍSTICA:",
          text: "Tipos de munições, projéteis para o tiro ao alvo, projéteis para defesa, projéteis para espingarda, cuidados com a munição, conceitos de segurança, funcionamento de armas e munições. Noções de Balística Interna e Externa. Medicina legal e lesões por arma de fogo.",
        },
        {
          title: "ARMAMENTO: ",
          text: "Identificação de armas e munições. Princípios de funcionamento de armas de fogo: Classificação: tipos, armas de porte, calibres restritos e permitidos. Noções de manutenção de armamentos. Manuseio de revólveres, pistolas, carabinas, fuzis e espingardas em diversos calibres.",
        },
        {
          title: "TEORIA E PRÁTICA DO TIRO:",
          text: "Aspectos fundamentais para a prática do tiro: empunhadura, posições de tiro, municiamento, desmuniciamento, solução de panes, visada, alinhamento, controle do gatilho, disparo e análise do tiro. Técnica “Double Tap” (revisada) e disparos com movimentos defensivos e ofensivos. Execução de técnicas de tiro tático: Movimentação, Recarga tática, noções de combate contra alvos múltiplos, noções de combate em ambientes de baixa luminosidade e em ambientes confinados (CQB). Apresentação de técnicas de combate urbano e Análise de vídeos de enfrentamentos urbanos e “cases” reais.",
        },
      ],
    },
  },
  {
    src: advancedCourse[1].url,
    title: "Curso De Operador De Fuzil",
    text: "Visa a capacitação no manuseio e uso de carabinas na plataforma AR15, IA2 e FAL.",
    modal: {
      text: "Duração: Um dia de curso",
      detail: [
        {
          title: "Conteúdo: ",
          text: (
            <ul>
              <li>• Regras Básicas de Segurança</li>
              <li>
                • Desmontagem, Montagem, Conservação e Limpeza do Armamento
              </li>
              <li>• Posições de tiro</li>
              <li>• Giros e Deslocamentos</li>
              <li>• Recarga</li>
              <li>• Solução de panes</li>
              <li>• Uso de equipamentos ópticos</li>
            </ul>
          ),
        },
        {
          title:
            "Diversos exercícios distribuídos sobre os seguintes tópicos: ",
          text: (
            <ul>
              <li> • Posição de Tiro (em pé, ajoelhado e deitado)</li>
              <li> • Empunhadura/ Visada</li>
              <li> • Precisão</li>
              <li> • Recarga</li>
              <li> • Solução de panes</li>
            </ul>
          ),
        },
        {
          title: "Incluso:",
          text: "Armamento, acessórios, munição, certificado, apostila e coffee break.",
        },
        {
          title: "Pré-requesito: ",
          text: "Aberto para sócios e seus convidados. Atiradores que possuam CR (Certificado de Registro) emitido pelo Exército Brasileiro podem participar, sem convite, no valor fixado para visitantes.",
        },
      ],
    },
  },
  {
    src: advancedCourse[1].url,
    title: "Curso de Operador de Espingarda",
    text: "Visa a capacitação no manuseio e uso de Espingardas de repetição e semi-automáticas.",
    modal: {
      text: "Duração: Um dia de curso",
      detail: [
        {
          title: "Conteúdo: ",
          text: (
            <ul>
              <li>• Regras Básicas de Segurança</li>
              <li>
                • Desmontagem, Montagem, Conservação e Limpeza do Armamento
              </li>
              <li>• Posições de tiro</li>
              <li>• Giros e Deslocamentos</li>
              <li>• Recarga</li>
              <li>• Solução de panes</li>
            </ul>
          ),
        },
        {
          title:
            "Diversos exercícios distribuídos sobre os seguintes tópicos: ",
          text: (
            <ul>
              <li> • Posição de Tiro (em pé, ajoelhado e deitado)</li>
              <li> • Empunhadura/ Visada</li>
              <li> • Precisão</li>
              <li> • Recarga</li>
              <li> • Solução de panes</li>
            </ul>
          ),
        },
        {
          title: "Incluso:",
          text: "Armamento, acessórios, munição, certificado, apostila e coffee break.",
        },
        {
          title: "Pré-requesito: ",
          text: "Aberto para sócios e seus convidados. Atiradores que possuam CR (Certificado de Registro) emitido pelo Exército Brasileiro podem participar, sem convite, no valor fixado para visitantes.",
        },
      ],
    },
  },
  {
    src: advancedCourse[1].url,
    title: "Curso de Operador de Duas Armas",
    text: "A combinação efetiva de armamentos aliada à aplicação perfeita de técnicas de operação. Seja eficaz e sobreviva a eventos violentos utilizando em sintonia os armamentos disponíveis.",
    modal: {
      text: "Duração: Um dia",
      detail: [
        {
          title: "Conteúdo:",
          text: (
            <ul>
              <li>• Operação de armas curtas e longas</li>
              <li>• Reação sob estresse e Autocontrole</li>
              <li>• Transição de armas</li>
              <li>• Giros e Deslocamentos</li>
              <li>• Noções de CQB</li>
              <li>• Noções de Combate em Baixa luminosidade</li>
            </ul>
          ),
        },
        {
          title: "Incluso:",
          text: "Armamento, acessórios, munição, certificado, apostila e coffee break.",
        },
      ],
    },
  },
];

function ACourse() {
  const [modalIsOpen, setModalIsOpen] = useState(
    Array(COURSES.length).fill(false)
  );

  const toggleModal = (index) => {
    const newStates = [...modalIsOpen];
    newStates[index] = !newStates[index];
    setModalIsOpen(newStates);
  };
  return (
    <div className="text-white mt-28" data-aos="fade-up">
      <div className="ml-20 mr-20">
        <p className="text-[90px] text-center bebas_neue-font">
          Cursos de Aprimoramento no Tiro
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div
          className="h-auto max-h-[20rem] w-auto flex items-center m-12 border border-gray-700 rounded-lg shadow  bg-gradient-to-b from-neutral-700 to-neutral-900"
          data-aos="flip-right"
        >
          <div className="origin-top-left px-4">
            <p className="text-[32px] montserrat_classic-font">Conteudo:</p>
            <p className="text-[24px] inter-font">
              Os cursos de aprimoramento no tiro são indicados para os que
              desejam melhorar no tiro esportivo ou de defesa, é uma experiência
              fundamental para habilitar ou capacitar o uso mais assertivo de
              armas de fogo
            </p>
          </div>
        </div>
        <div className="flex justify-center py-10" data-aos="flip-left">
          <Image src={advancedCourse[1].url} alt="Curso de Iniciação no Tiro" />
        </div>
      </div>
      <div className="ml-20 mr-20">
        <p className="text-[80px] bebas_neue-font">Cursos presentes:</p>
      </div>
      <div
        className="md:grid md:grid-cols-2 flex flex-wrap gap-3 m-10 "
        data-aos="fade-down"
      >
        {COURSES.map((curso, index) => (
          <div
            className="mr-1 pl-10 pt-10 pb-10 bg-red-800 border border-gray-700"
            key={index}
            data-aos="fade-up"
            data-aos-delay={200 + 80 * index}
          >
            <div className="pb-2">
              <p className="text-[32px] bebas_neue-font">{curso.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 m-2">
              <Image
                src={curso.src}
                className="h-full self-center"
                alt={curso.title}
              />
              <div>
                <div>
                  <p className="text-[90%] inter-font">{curso.text}</p>
                </div>
                <button
                  className="bg-red-800 shadow border border-black border-opacity-20 text-center text-xl py-2 px-8 font-extrabold hover:shadow-2xl mt-8 mx-auto ml-20"
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    border: "2px solid white",
                    fontFamily: "neue_montreal",
                  }}
                  onClick={() => toggleModal(index)}
                >
                  SAIBA MAIS
                </button>
                <Modal
                  isOpen={modalIsOpen[index]}
                  onRequestClose={() => toggleModal(index)}
                >
                  <h2 className="text-[3em] bebas_neue-font mb-4 bg-gradient-to-b from-neutral-700 to-neutral-900 text-white px-5">
                    {curso.title}
                  </h2>
                  <h1 className="py-2 text-[1em] inter-font">{curso.text}</h1>
                  <h1 className="inter-font py-2 text-[1em]">
                    {curso.modal.text}
                  </h1>
                  <div>
                    {curso.modal.detail.map((item, idx2) => (
                      <div key={idx2}>
                        <h2 className="font-bold montserrat_classic-font text-[1.5em]">
                          {item.title}
                        </h2>
                        <div className="inter-font text-[1em]">{item.text}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={() => toggleModal(index)}
                  >
                    Fechar Modal
                  </button>
                </Modal>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-20">
        <p className="text-[38px] montserrat_classic-font">
          Fique ligado em nossas redes sociais para sempre receber as
          atualizações, como datas e inscrições para futuros campeonatos!!
        </p>
      </div>

      <div className="py-10 flex justify-around items-center space-x-4 w-full pl-3">
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
