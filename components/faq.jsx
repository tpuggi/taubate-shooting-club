import Link from "next/link";
import React, { useState } from "react";

const FAQ = [
  {
    pergunta: "Qual a localização do TSC?",
    resposta:
      "O Taubaté Shooting Club está situado em local privilegiado, com amplo estacionamento, fácil acesso e segurança. Está localizado no The Place - Via Auto Shopping - Av. Dom Pedro I, 7231 – Loja 8, Taubaté - SP, CEP 12091-000.",
  },
  {
    pergunta: "Qual o horário de funcionamento do TSC?",
    resposta:
      "O TSC possui horário de funcionamento estendido, de Segunda à Sexta-feira das 13h às 19h. Sábados das 10h às 18h. Domingos são reservados para treinamentos e competições. Sócios podem solicitar horários diferenciados!",
  },
  {
    pergunta: "Como funciona o TSC?",
    resposta:
      "Somos um clube, onde você participa como se fosse uma academia, com plano anual de R$100,00 ao mês, pagos no cartão de crédito. Para CAC, militares, policiais e sócios na renovação custa R$75,00 ao mês.",
  },
  {
    pergunta: "Benefícios de ser associado:",
    resposta: (
      <>
        <Link href="/sejaSocio" className="cursor-pointer">
          Você pode conferir os benefícios de ser associado em{" "}
          <strong>Seja sócio!</strong>
        </Link>
      </>
    ),
  },
  {
    pergunta: "O TSC aceita não sócios?",
    resposta:
      "Sim. Todos são bem vindos. Você pode escolher os pacotes disponíveis para treinamento de tiro.  Nossos pacotes incluem armas, munições e equipamentos de proteção.",
  },
  {
    pergunta:
      "O TSC possui um simulador de tiro utilizado por forças policiais nos Estados Unidos?",
    resposta:
      "Sim. Além do nosso estande ser padrão internacional, possuimos vários simuladores de tiro para treinamento. Neles você pode aprender a atirar e também desenvolver suas habilidades em diversos programas com milhares de cenários para esporte, defesa ou simplesmente lazer.",
  },
  {
    pergunta: "E se eu nunca tiver atirado antes?",
    resposta:
      "Nós recomendamos que você participe de um de nossos cursos de tiro, para realmente se habilitar a possuir ou portar armas de fogo. Somos altamente capacitados para que você descubra o mundo das armas com segurança e boa técnica.",
  },
  {
    pergunta:
      "Posso passar próximo do horário de encerramento do TSC para esvaziar alguns carregadores e dormir feliz?",
    resposta:
      "Sim. Mas o estande encerra para manutenção e limpeza 15 minutos antes do fechamento do Clube.",
  },
  {
    pergunta: "Posso levar minha própria arma e munição para atirar?",
    resposta:
      "Sim. Mas você deve possuir a Guia de Tráfego ou o porte de sua arma. ",
  },
  {
    pergunta: "O TSC funciona nos feriados?",
    resposta:
      "Sim, normalmente abrimos na maioria dos feriados, mas por favor sempre verifique conosco antes.",
  },
  {
    pergunta: "É permitido fotografias e filmagens no TSC?",
    resposta:
      "Permitimos o uso de celulares no estande de tiro. Você também pode registrar seus momentos, após a sessão de tiro ou contratar nosso fotógrafo. É profissional, barato e seguro.",
  },
  {
    pergunta: "O TSC aceita reservas?",
    resposta:
      "Sim, mas somente sócios possam efetuar reservas.",
  },
  {
    pergunta: "O TSC permite o uso do clube para grupos em eventos?",
    resposta:
      "Sim. Entre em contato com nosso gerente e programe seu evento. É seguro, motivador e a pólvora o tornará inesquecível!",
  },
  {
    pergunta: "Qual é o limite de idade para uso do estande?",
    resposta:
      "A partir de 18 anos, sem restrição. Menores de idade, entre 14 e 17 anos, somente com autorização judicial.",
  },
  {
    pergunta: "Qual é o maior calibre que você permite no estande?",
    resposta: "Nossa blindagem permite até o calibre 7.62X51 NATO (.308 Win).",
  },
];

const Faq = () => {
  const [dropdownStates, setDropdownStates] = useState(
    Array(FAQ.length).fill(false)
  );
  const toggleDropdown = (index) => {
    const newStates = [...dropdownStates];
    newStates[index] = !newStates[index];
    setDropdownStates(newStates);
  };

  return (
    <div className="mt-16 mx-10">
      <div className="mb-7">
        <p className="text-[65px] font-bold text-white mb-2 bebas_neue-font">
          Perguntas Frequentes
        </p>
        <p className="text-white text-lg inter-font">
          Encontre respostas para as perguntas mais comuns abaixo:
        </p>
      </div>
      <div className="grid gap-4 mb-10">
        {FAQ.map((item, index) => (
          <div
            className="bg-gradient-to-b from-neutral-700 to-neutral-900 p-4"
            key={index}
            onClick={() => toggleDropdown(index)}
          >
            <p className="text-[25px] text-white inter-font flex items-center text-4xl">
              {item.pergunta}{" "}
              {dropdownStates[index] ? (
                <svg
                  className="w-5 h-5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5 5 1 9 5"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              )}
            </p>
            {dropdownStates[index] && (
              <div className="text-white p-4 inter-font">
                <p className="text-[16px] origin-top-left text-justify text-white text-2xl inter-font leading-loose">
                  {item.resposta}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
