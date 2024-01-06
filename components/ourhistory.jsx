import clubePhoto from "../public/images/clube.jpg";
import mission from "../public/images/missao.jpg";
import Image from "next/image";

const OurHistory = () => {
  return (
    <div className="mt-32">
      <div
        className="md:grid md:grid-cols-2 md:gap-8 gap-4 flex flex-wrap mx-10 my-4"
        data-aos="fade-down"
      >
        <div className="items-center flex gap-2">
          <Image src={clubePhoto} alt="foto do clube" />
        </div>
        <div className="grid gap-2 bg-white p-5">
          <p className="text-black montserrat_classic-font text-5xl text-[3em]">
            Nossa História
          </p>
          <p className="text-[1em] origin-top-left text-justify text-black text-3xl inter-font leading-loose">
            O Taubaté Shooting Club é uma associação sem fins lucrativos que
            surgiu da união de propósitos de empresários, profissionais
            liberais, funcionários públicos, policiais e militares de Taubaté e
            região.
          </p>
        </div>
      </div>

      <div
        className="md:grid md:grid-cols-2 md:gap-8 gap-4 flex flex-wrap-reverse mx-10 my-4"
        data-aos="fade-down"
      >
        <div className="grid gap-2 bg-neutral-700 p-5">
          <p className="text-[3em] text-white montserrat_classic-font text-5xl">
            Missão
          </p>
          <p className="text-[1em] origin-top-left text-justify text-white text-3xl inter-font leading-loose">
            Treinar civis para desenvolver as habilidade necessárias para o uso
            eficaz e responsável de armas de fogo.
          </p>
        </div>
        <div className="grid gap-2">
          <Image src={mission} alt="foto do clube" />
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
