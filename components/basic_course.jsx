import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "../context/context";
import { campsImages } from "../context/context";
import { conteudoCamps } from "../context/context";
import bullet from "../public/images/bullete.png";
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
const titleContact = [
  {
    title:
      "Fique ligado em nossas redes sociais para sempre receber as atualizações, como datas e inscrições para futuros campeonatos!!",
  },
];

const COURSES = [
  {
    src: campsImages[1].url,
    title: "Fundamentos no tiro",
    text: "O curso de fundamentos do tiro é o indicado para os que desejam iniciar no tiro esportivo ou de defesa, é uma experiência fundamental para habilitar ou capacitar ao uso de armas de fogo.",
    modal: {
      text: "É a porta de entrada para quem quer descobrir o mundo das armas com toda a segurança e boa técnica, acompanhado de instrutores com larga experiência profissional. É motivador e uma experiência inesquecível!",
      detail: [
        {
          title: "Revólver",
          text: "Instrução básica de regras de segurança e fundamentos do tiro. Até 50 tiros de revólver calibre .22LR e .38SPL",
        },
        {
          title: "Pistola",
          text: "Instrução básica de regras de segurança e fundamentos do tiro. Até 50 tiros de pistola calibre .22LR, .380ACP e 9mm",
        },
        {
          title: "Carabina",
          text: "Instrução básica de regras de segurança e fundamentos do tiro. Até 50 tiros de carabina .22LR e .9mm.",
        },
        {
          title: "Duas armas - Revólver e Pistola",
          text: "Instrução básica de regras de segurança e fundamentos do tiro. Até 50 tiros de revólver calibre .22LR e .38SPL. Até 50 tiros de pistola calibre .22LR, .380ACP e 9mm",
        },
      ],
    },
  },
  {
    src: campsImages[1].url,
    title: "Curso de capacitação",
    text: "O curso tem como prioridade qualificar o aluno para a prova de capacidade técnica aplicada por Instrutor de Armamento e Tiro da Polícia Federal (IAT/PF).",
    modal: {
      text: "Duração:  2 horas - 60 disparos",
      detail: [
        {
          title: "Objetivo: ",
          text: "O curso tem como prioridade qualificar o aluno para a prova de capacidade técnica aplicada por Instrutor de Armamento e Tiro da Polícia Federal (IAT/PF), sendo fundamental para a aquisição de armas pelo SINARM (PF) ou SIGMA (EB), renovação de registro de armas de fogo ou expedição de Certificado de Registro (CR) de Colecionador, Caçador ou Atirador (CAC).",
        },
        {
          title: "Conteúdo: ",
          text: "Todos os temas da cartilha de armamento e tiro da PF, elaborada pelo Serviço de Armamento e Tiro - SAT da Academia Nacional de Polícia - ANP e pela Comissão Nacional de Credenciamento de Instrutores de Armamento e Tiro – CONAT/DARM, com o objetivo principal de fornecer os ensinamentos que serão cobrados em exame para a comprovação de capacidade técnica para o manuseio de arma de fogo.",
        },
      ],
    },
  },
  {
    src: campsImages[1].url,
    title: "Curso de Atirador Esportivo",
    text: "O curso tem como prioridade, capacitar atiradores iniciantes para a prática do Tiro Defensivo (IDSC) ou Tiro Tático Dinâmico (TTD).",
    modal: {
      text: "Duração: 1 dia",
      detail: [
        {
          title: "Objetivo: ",
          text: (
            <div>
              <p>
                O curso tem como prioridade, capacitar atiradores iniciantes
                para a prática do Tiro Defensivo (IDSC) ou Tiro Tático Dinâmico
                (TTD) em relação às técnicas do esporte e auxiliá-lo no seu
                desenvolvimento, corrigindo seus erros.
              </p>

              <p>
                Tanto para iniciantes como para os já praticantes dessas
                modalidades de Tiro Esportivo, aperfeiçoe sua técnica e
                conhecimentos para melhorar sua PRECISÃO e VELOCIDADE
              </p>
            </div>
          ),
        },
        {
          title: "Conteúdo: (teórico e prático)",
          text: (
            <ul>
              <li> Regras</li>
              <li> Técnicas de Visada e Transição de Alvos</li>
              <li> Precisão</li>
              <li> Cadência</li>
              <li> Movimento de Alvo a Alvo</li>
              <li> Deslocamento Lateral e Frontal</li>
              <li> Entrada e Saída de Posto</li>
              <li> Recarga</li>
              <li> Tiro Barricado</li>
              <li> Dúvidas Sobre Regulamentos</li>
              <li> Segurança</li>
              <li> Execução de Pistas</li>
            </ul>
          ),
        },
        {
          title: "Material: ",
          text: (
            <ul>
              <li>Equipamento completo de proteção</li>
              <li>Coldre, Arma e Munição (100 disparos)</li>
            </ul>
          ),
        },
      ],
    },
  },
  {
    src: campsImages[1].url,
    title: "Torneio Buscapé",
    text: "Carabina é uma arma de fogo mais curta que o fuzil, tendo entre 1,0 e 1,2 metro de comprimento muito usada em caça e tiro desportivo podendo ser de diversos calibres.",
    modal: {
      text: ""
    }
  },
];

function Course() {
  const [modalIsOpen, setModalIsOpen] = useState(
    Array(COURSES.length).fill(false)
  );

  const toggleModal = (index) => {
    const newStates = [...modalIsOpen];
    newStates[index] = !newStates[index];
    setModalIsOpen(newStates);
  };

  return (
    <div className="text-white mt-28">
      <div className="ml-20 mr-20">
        <p className="text-[90px] text-center bebas_neue-font">
          Cursos de Iniciação no Tiro
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-auto max-h-[20rem] w-auto flex items-center m-12 bg-white border border-gray-200 rounded-lg shadow  bg-gradient-to-b from-neutral-700 to-neutral-900">
          <div className="origin-top-left px-4">
            <p className="text-[32px] montserrat-font">Conteudo:</p>
            <p className="text-[24px] inter-font">
              Os cursos de iniciação no tiro são indicados para os que desejam
              iniciar no tiro esportivo ou de defesa, é uma experiência
              fundamental para habilitar ou capacitar ao uso de armas de fogo.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Image src={conteudoCamps[1].url} alt="Curso de Iniciação no Tiro" />
        </div>
      </div>
      <div className="ml-20 mr-20">
        <p className="text-[80px] bebas_neue-font">Cursos presentes:</p>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-wrap gap-3 m-10">
        {COURSES.map((curso, index) => (
          <div
            className="mx-0.5 my-0.5 px-5 pt-4 bg-red-800 shadow-lg"
            key={index}
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
                  <h2 className="text-xl mb-4">Este é o conteúdo do modal</h2>
                  <div>
                    {curso.detail &&
                      curso.detail.map((item, idx2) => (
                        <h2 key={idx2}>{item}</h2>
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
