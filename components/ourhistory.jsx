import clubePhoto from "../public/images/clube.jpg";
import Image from "next/image";

const OurHistory = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 mx-10 my-4">
        <div className="grid gap-2">
          <Image src={clubePhoto} />
        </div>
        <div className="grid gap-2 bg-white">
          <p className="text-center text-black bebas_neue-font text-5xl">
            Nossa História
          </p>
          <p className="origin-top-left text-justify text-black text-3xl bebas_neue-font leading-loose">
            O Taubaté Shooting Club é uma associação sem fins lucrativos que
            surgiu da união de propósitos de empresários, profissionais
            liberais, funcionários públicos, policiais e militares de Taubaté e
            região.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mx-10 my-4">
        <div className="grid gap-2 bg-black">
          <p className="text-center text-white bebas_neue-font text-5xl">
            Missão
          </p>
          <p className="origin-top-left text-justify text-white text-3xl bebas_neue-font leading-loose">
            Treinar civis para desenvolver as habilidade necessárias para o uso
            eficaz e responsável de armas de fogo.
          </p>
        </div>
        <div className="grid gap-2">
          <Image src={clubePhoto} />
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
