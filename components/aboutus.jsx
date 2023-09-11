import Link from "next/link";
import oclube from "../public/images/oclube.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-2 mx-10 text-white mt-32">
      <p className="text-center text-white bebas_neue-font text-[90px]">
        O CLUBE
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-rows-3 ml-[5em] gap-2 text-white inter-font items-center">
          <div className="text-[2em] pr-10 pl-10">
            <p className="text-white inter-font">
              Uma <strong>estrutura moderna</strong> e funcional, que facilita a
              vida de quem quer <strong>praticar esporte</strong>, treinar
              defesa ou melhorar habilidades técnicas.
            </p>
          </div>
          <div className="my-2 mb-2 text-[28px] pr-10 pl-10 pb-16">
            <p>Aqui você encontra:</p>
            <ul>
              <li>• Treinamentos e competições </li>
              <li>• Profissionais capacitados </li>
              <li>• Prática com segurança</li>
            </ul>
          </div>
          <div className="border-5 border-red justify-center items-center pt-4 shadow solid border-red-800 border-[5px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-black to-red-800 text-center text-white text-[2em] font-extrabold leading-[38.50px] mx-20 mt-6">
            <p className="montserrat_classic-font font-bold mx-2">
              FAÇA PARTE DA NOSSA COMUNIDADE
            </p>
            <div className="p-6">
              <Link
                href="/seja-socio"
                className="bg-red-800 shadow border-white bebas_neue-font text-center px-16 py-4 font-extrabold hover:shadow-2xl"
                style={{
                  fontWeight: "bold",
                  fontSize: "1em",
                  border: "2px solid white",
                }}
              >
                SAIBA MAIS
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <Image src={oclube} alt="Imagem do clube" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
