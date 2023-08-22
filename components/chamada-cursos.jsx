import bullet from "../public/images/bullete.png";

import Image from "next/image";

const ChamadaCursos = () => {
  return (
    <div className="flex justify-center items-center bg-red-800 bg-opacity-75">
      <div className="pt-10 text-center justify-center items-center text-white">
        <h1 style={{ fontSize: "80px" }}>Conheça também nossos cursos!</h1>
        <p style={{ fontSize: "35px" }} className="pr-10 pl-10">
          A melhor estrutura com stand de tiros, cursos e treinamentos e toda
          assessoria para compra de produtos controlados do Brasil.
          <br></br>
        </p>
        <p style={{ fontSize: "50px" }}>AGENDE UMA VISITA AGORA MESMO!</p>
        <div className="flex justify-center pt-8">
          <Image src={bullet} className="w-[89px] h-[22px]" />
        </div>
        <div className="flex justify-center items-center pt-8">
          <button
            className="bg-[#BFAE95] text-center text-red-800 text-3xl pr-20 pl-20 pt-5 pb-5 font-extrabold hover:shadow-2xl"
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              border: "2px solid black",
            }}
          >
            CURSOS
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChamadaCursos;
