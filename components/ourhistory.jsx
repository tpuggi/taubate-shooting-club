import clubePhoto from "../public/images/clube.jpg";
import Image from "next/image";

const OurHistory = () => {
  return (
    <div className="mt-32">
      <div className="grid grid-cols-2 gap-8 mx-10 my-4">
        <div className="grid gap-2">
          <Image src={clubePhoto} alt="foto do clube" />
        </div>
        <div className="grid gap-2 bg-white p-14">
          <p className="text-black inter-font text-5xl text-[60px]">
            Nossa História
          </p>
          <p className="text-[28px] origin-top-left text-justify text-black text-3xl inter-font leading-loose">
            O Taubaté Shooting Club é uma associação sem fins lucrativos que
            surgiu da união de propósitos de empresários, profissionais
            liberais, funcionários públicos, policiais e militares de Taubaté e
            região.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mx-10 my-4">
        <div className="grid gap-2 bg-black p-14">
          <p className="text-[60px] text-white inter-font text-5xl">Missão</p>
          <p className="text-[28px] origin-top-left text-justify text-white text-3xl inter-font leading-loose">
            Treinar civis para desenvolver as habilidade necessárias para o uso
            eficaz e responsável de armas de fogo.
          </p>
        </div>
        <div className="grid gap-2">
          <Image src={clubePhoto} alt="foto do clube" />
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
