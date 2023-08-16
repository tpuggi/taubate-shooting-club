import bullet from "../public/images/bullete.png";

import Image from "next/image";

const ChamadaCursos = () => {
  return (
    <div className="flex justify-center items-center bg-red-800 bg-opacity-75">
      <div className="text-center justify-center items-center text-white">
        <h1 style={{ fontSize: "36px" }}>Conheça também nossos cursos!</h1>
        <p style={{ fontSize: "18px" }}>
          A melhor estrutura com stand de tiros, cursos e treinamentos e toda
          assessoria para<br></br> compra de produtos controlados do Brasil.
          <br></br>
        </p>
        <p style={{ fontSize: "22px" }}>AGENDE UMA VISITA AGORA MESMO!</p>
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
