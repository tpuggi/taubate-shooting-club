import React, { useState } from 'react';

const perguntasERespostas = [
  {
    pergunta: "Qual a localização do TSC?",
    resposta:
      "O Taubaté Shooting Club está situado em local privilegiado, com amplo estacionamento, fácil acesso e segurança. Está localizado no The Place - Via Auto Shopping - Av. Dom Pedro I, 7231 – Loja 8, Taubaté - SP, CEP 12091-000.",
  },
  {
    pergunta: "Qual o horário de funcionamento do TSC?",
    resposta:
      "O TSC possui horário de funcionamento estendido, de Segunda à Sexta-feira das 13h às 19h. Sábados das 10h às 18h (Horário de Shopping pelo Decreto Covid19). Domingos são reservados para treinamentos e competições. Sócios podem solicitar horário diferenciado!",
  },
  {
    pergunta: "Como funciona o TSC?",
    resposta:
      "Somos um clube, onde você participa como se fosse uma academia, com plano anual de R$100,00 ao mês, pagos no cartão de crédito. Para CAC, militares, policiais e sócios na renovação custa R$75,00 ao mês.",
  },
  {
    pergunta: "Benefícios de ser associado:",
    resposta:
      "- Uso gratuito do estande de tiro e com hora marcada. Sócio não espera para atirar!," 
  },
  {
    pergunta: "O TSC aceita não sócios?",
    resposta:
      "Sim. Todos são bem vindos. Você pode escolher os pacotes disponíveis para treinamento de tiro.  Nossos pacotes incluem armas, munições e equipamentos de proteção." 
  },
  {
    pergunta: "O TSC possui um simulador de tiro utilizado por forças policiais nos Estados Unidos?",
    resposta:
      "Sim. Além do nosso estande ser padrão internacional, possuimos vários simuladores de tiro para treinamento. Neles você pode aprender a atirar e também desenvolver suas habilidades em diversos programas com milhares de cenários para esporte, defesa ou simplesmente lazer." 
  },
  {
    pergunta: "E se eu nunca tiver atirado antes?",
    resposta:
      "Nós recomendamos que você participe de um de nossos cursos de tiro, para realmente se habilitar a possuir ou portar armas de fogo. Somos altamente capacitados para que você descubra o mundo das armas com segurança e boa técnica." 
  },
  {
    pergunta: "Posso passar próximo do horário de encerramento do TSC para esvaziar alguns carregadores e dormir feliz?",
    resposta:
      "Sim. Mas o estande encerra para manutenção e limpeza 15 minutos antes do fechamento do Clube." 
  },
  {
    pergunta: "Posso levar minha própria arma e munição para atirar?",
    resposta:
      "Sim. Mas você deve possuir a Guia de Tráfego ou o porte de sua arma. " 
  },
  {
    pergunta: "O TSC funciona nos feriados?",
    resposta:
      "Sim, normalmente abrimos na maioria dos feriados, mas por favor sempre verifique conosco antes." 
  },
  {
    pergunta: "É permitido fotografias e filmagens no TSC?",
    resposta:
      "Permitimos o uso de celulares no estande de tiro. Você também pode registrar seus momentos, após a sessão de tiro ou contratar nosso fotógrafo. É profissional, barato e seguro." 
  },
  {
    pergunta: "O TSC aceita reservas?",
    resposta:
      "Sim, embora somente sócios possam efetuar reservas, devido ao Covid19 estamos agendando para todos os usuários, para evitar aglomerações." 
  },
  {
    pergunta: "O TSC permite o uso do clube para grupos em eventos?",
    resposta:
      "Sim. Entre em contato com nosso gerente e programe seu evento. É seguro, motivador e a pólvora o tornará inesquecível!" 
  },
  {
    pergunta: "Qual é o limite de idade para uso do estande?",
    resposta:
      "A partir de 18 anos, sem restrição. Menores de idade, entre 14 e 17 anos, somente com autorização judicial." 
  },
  {
    pergunta: "Qual é o maior calibre que você permite no estande?",
    resposta:
      "Nossa blindagem permite até o calibre 7.62X51 NATO (.308 Win)." 
  },
];

const Faq = () => {
  const [dropdownStates, setDropdownStates] = useState(
    Array(perguntasERespostas.length).fill(false)
  );
  const toggleDropdown = (index) => {
    const newStates = [...dropdownStates];
    newStates[index] = !newStates[index];
    setDropdownStates(newStates);
  };

  return (
    <div className="mt-32 mx-10">
      <div className="mb-7">
        <p className="text-[65px] font-bold text-white mb-2 bebas_neue-font">Perguntas Frequentes</p>
        <p className="text-white text-lg inter-font">Encontre respostas para as perguntas mais comuns abaixo:</p>
      </div>
      <div className="grid gap-4">
        {perguntasERespostas.map((item, index) => (
          <div className="bg-black p-4" key={index}>
            <p className="text-[25px] text-white inter-font text-4xl">
              {item.pergunta}
            </p>
            <button
              onClick={() => toggleDropdown(index)}
              className="text-white text-2xl cursor-pointer inter-font"
            >
              {dropdownStates[index] ? 'Fechar' : 'Resposta'}
            </button>
            {dropdownStates[index] && (
              <div className="bg-black text-white p-4 inter-font">
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
