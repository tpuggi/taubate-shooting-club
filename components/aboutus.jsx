import Link from "next/link";
import oclube from "../public/images/oclube.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      className="grid grid-rows-[auto,1fr] gap-2 md:mx-10 text-white mt-32"
      data-aos="fade-up"
    >
      <p className="text-center text-white bebas_neue-font text-[6em]">
        O CLUBE
      </p>
      <div className="md:grid flex flex-wrap-reverse md:grid-cols-2 md:gap-2">
        <div className="grid grid-rows-3 mx-[1em] md:ml-[5em] gap-2 text-white inter-font items-center">
          <div className="text-[2em] md:px-10">
            <p className="text-white inter-font">
              Uma <strong>estrutura moderna</strong> e funcional, que facilita a
              vida de quem quer <strong>praticar esporte</strong>, treinar
              defesa ou melhorar habilidades técnicas.
            </p>
          </div>
          <div className="text-[1.75em] px-2 md:px-10 pb-8 inter-font">
            <p>Aqui você encontra:</p>
            <ul>
              <li>• Treinamentos e competições </li>
              <li>• Profissionais capacitados </li>
              <li>• Prática com segurança</li>
            </ul>
          </div>
          <div className="border-5 border-red justify-center items-center pt-4 shadow solid border-red-800 border-[5px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black to-red-800 text-center text-white text-[2em] font-extrabold leading-[38.50px] md:mx-20 mx-10 md:mt-6">
            <p className="montserrat_classic-font font-bold mx-2">
              FAÇA PARTE DA NOSSA COMUNIDADE
            </p>
            <div className="md:p-6 p-2 flex flex-nowrap justify-center">
              <Link
                href="/sejaSocio"
                className="bg-red-800 shadow border-white bebas_neue-font text-center px-8 md:px-16 md:py-4 font-[1em] hover:shadow-2xl"
                style={{
                  fontWeight: "bold",
                  border: "2px solid white",
                }}
              >
                SAIBA MAIS
              </Link>
            </div>
          </div>
        </div>
        <div className="py-8">
          <Image src={oclube} alt="Imagem do clube" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
