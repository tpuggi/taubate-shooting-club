import { servicesImages } from "../context/context.js";
import Image from "next/image";

const SERVICES = [
  {
    title: "Manutenção de Armamentos",
    text: "O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a Cammo Arts Custom.",
    image: servicesImages[0].url,
  },
  {
    title: "Despachantes Especializados",
    text: "O TSC possui despachantes especializados. Com eles você não precisará se preocupar com a burocracia que envolve aquisição de arma de fogo, renovação de registro (SINARM e SIGMA) e emissão de Certificado de Registro (CR) de Atirador, Caçador ou Colecionador (CAC), Guias de Tráfego ou Porte de Arma de Fogo.",
    image: servicesImages[1].url,
  },
  {
    title: "Comprovante de capacidade técnica de arma de fogo",
    text: "Possuímos despachantes especializados. Com eles você não precisará se preocupar com a burocracia que envolve aquisição de arma de fogo, renovação de registro (SINARM e SIGMA) e emissão de Certificado de Registro (CR) de Atirador, Caçador ou Colecionador (CAC), Guias de Tráfego ou Porte de Arma de Fogo.",
    image: servicesImages[2].url,
  },
  {
    title: "Treinamentos de alto nível",
    text: "O uso eficiente de armas de fogo exige, basicamente, aprendizado contínuo e treinamento constante. Seja para a prática de esporte ou lazer, seja para defesa pessoal, no TSC você pode iniciar seu aprendizado e desenvolver suas habilidades com instrutores de alto nível. O TSC possui instalações modernas, únicas no Brasil, que utilizam a tecnologia da empresa americana Laser Shot Simulations, a mesma utilizada pela agência federal americana responsável pelo treinamento de todas as agências integrantes do Homeland Defense (CIA, FBI, NSA, CBP..).",
    image: servicesImages[3].url,
  },
  {
    title: "Competições",
    text: "Realizamos regularmente competições de tiro em diversas modalidades. Treine conosco, participe e seja um atleta no ranking do IDSC, Tiro Tático Dinâmico (TTD), Tiro Rápido de Precisão, Shot Precision e IPSC. Com retorno dos níveis de atirador esportivo, o TSC sedia diversas competições de ambito nacional e internacional.",
    image: servicesImages[4].url,
  },
];

const OurServices = () => {
  return (
    <div className="text-white mt-30" id="servicos" data-aos="fade-up">
      <p className="text-[80px] neue_montreal-font text-center md:text-left md:ml-5">
        Nossos Serviços
      </p>
      <p className="text-[25px] px-5 pt-5 inter-font">
        Realizamos diversos <strong>cursos de capacitação</strong> com convênio
        para aplicar os testes exigidos para a <strong>aquisição</strong> de
        armas de fogo, <strong>renovação</strong> de registros ou{" "}
        <strong>expedição</strong> de Certificado de Registro de CAC
        (Colecionador - Atirador ou Caçador).
      </p>
      <div className="grid grid-cols-1 sm:grid-rows-n md:grid-rows-n lg:grid-rows-n xl:grid-rows-n gap-3 pb-10">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="md:grid flex flex-wrap md:grid-cols-2 gap-3"
            data-aos="fade-down"
          >
            {index % 2 == 0 ? (
              <div className="mx-5 my-10">
                <Image
                  alt={service.title}
                  src={service.image}
                  className=" self-center h-full"
                />
              </div>
            ) : null}

            <div className="mx-6 my-10 bg-neutral-900 rounded-tl-[10px] rounded-tr-[10px]">
              <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] p-3">
                <p className="text-[2.3em]">{service.title}</p>
              </div>
              <div className="origin-top-left px-10 py-4">
                <p className="md:text-[120%] text-[90%]">{service.text}</p>
              </div>
            </div>

            {index % 2 == 1 ? (
              <div className="mx-5 py-10">
                <Image
                  alt={service.title}
                  src={service.image}
                  className="self-center h-full "
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
