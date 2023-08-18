import clubePhoto from "../public/images/logoTSC.png";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="grid grid-rows-2  gap-2 mx-10 text-white">
      <p className="text-center text-white bebas_neue-font text-[90px]">
        O CLUBE
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-rows-3 gap-2 text-white inter-font">
          <p className="text-white inter-font">
            Uma <strong>estrutura moderna</strong> e funcional, que facilita a
            vida de quem quer <strong>praticar esporte</strong>, treinar defesa
            ou melhorar habilidades técnicas.
          </p>
          <div>
            <p>Aqui você encontra:</p>
            <ul>
              <li>Treinamentos e competições </li>
              <li>Profissionais capacitados </li>
              <li>Prática com segurança</li>
            </ul>
          </div>
          <div className="justify-center items-center pt-8 bg-red-800 shadow border border-black border-opacity-20 bg-gradient-to-r from-[#000000] via-[#FF0000] to-[#000000] text-center text-white text-[40px] font-extrabold leading-[38.50px] mx-20">
            <p>FAÇA PARTE DA NOSSA COMUNIDADE</p>
            <div className="p-10">
              <button
                className="bg-red-800 shadow border border-black border-opacity-20 text-center text-3xl pr-20 pl-20 pt-5 pb-5 font-extrabold hover:shadow-2xl"
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  border: "2px solid black",
                }}
              >
                SAIBA MAIS
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={clubePhoto} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
