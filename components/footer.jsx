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

const Footers = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-700">
      <div className="container mx-auto py-8 flex">
        {/* Primeira coluna */}
        <div className="w-1/2 px-4">
          <div className="mb-4 font-bold">Cursos</div>
          <div className="grid grid-cols-2 gap-2">
            <a href="#" className="text-blue-500">
              Curso 1
            </a>
            <a href="#" className="text-blue-500">
              Curso 2
            </a>
            <a href="#" className="text-blue-500">
              Curso 3
            </a>
            <a href="#" className="text-blue-500">
              Curso 4
            </a>
          </div>
          <div className="mb-4 mt-6 font-bold">Nossos Serviços</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="font-bold">Serviço 1</div>
              <a href="#" className="text-blue-500">
                Link 1
              </a>
              <a href="#" className="text-blue-500">
                Link 2
              </a>
            </div>
            <div>
              <div className="font-bold">Serviço 2</div>
              <a href="#" className="text-blue-500">
                Link 1
              </a>
              <a href="#" className="text-blue-500">
                Link 2
              </a>
            </div>
          </div>
        </div>

        {/* Segunda coluna */}
        <div className="w-1/4 px-4">
          <div className="mb-4 font-bold">Contato</div>
          <div className="flex items-center mb-4">
            <img
              src="icon-address.png"
              alt="Endereço"
              className="w-6 h-6 mr-2"
            />
            <span>123 Rua Principal, Cidade</span>
          </div>
          <div className="mb-4 font-bold">Redes Sociais</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <img
                src="icon-facebook.png"
                alt="Facebook"
                className="w-6 h-6 mr-2"
              />
              <span>Facebook</span>
            </div>
            <div className="flex items-center">
              <img
                src="icon-twitter.png"
                alt="Twitter"
                className="w-6 h-6 mr-2"
              />
              <span>Twitter</span>
            </div>
            <div className="flex items-center">
              <img
                src="icon-instagram.png"
                alt="Instagram"
                className="w-6 h-6 mr-2"
              />
              <span>Instagram</span>
            </div>
            <div className="flex items-center">
              <img
                src="icon-linkedin.png"
                alt="LinkedIn"
                className="w-6 h-6 mr-2"
              />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>

        {/* Terceira coluna */}
        <div className="w-1/4 px-4">
          <div className="mb-4 font-bold">Fale Conosco</div>
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
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
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
