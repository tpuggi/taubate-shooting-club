import SomeImage from "../public/images/SomeImage.png";
import clube from "../public/images/clube.jpg";

import Image from "next/image";
import Link from "next/link";

import {} from "../context/context";

const titleServices01 = [{ text: "Manutenção de Armamentos" }];
const TexServices01 = [
  {
    text: "O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a Cammo Arts Custom.",
  },
];
const imageServices01 = [{ src: SomeImage }];

const titleServices02 = [{ text: "Manutenção de Armamentos" }];
const TexServices02 = [
  {
    text: "O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a Cammo Arts Custom.",
  },
];
const imageServices02 = [{ src: SomeImage }];

const titleServices03 = [{ text: "Manutenção de Armamentos" }];
const TexServices03 = [
  {
    text: "O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a Cammo Arts Custom.",
  },
];
const imageServices03 = [{ src: SomeImage }];

const titleServices04 = [{ text: "Manutenção de Armamentos" }];
const TexServices04 = [
  {
    text: "O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a Cammo Arts Custom.",
  },
];
const imageServices04 = [{ src: SomeImage }];

const titleServices05 = [{ text: "Manutenção de Armamentos" }];
const TexServices05 = [
  {
    text: "O TSC possui armeiro credenciado pela polícia federal capacitado para realizar manutenção preventiva ou corretiva do seu equipamento. Também realizamos customização do seu armamento. Pintura e gravação à Laser são nossas especialidades, pelo convênio com a Cammo Arts Custom.",
  },
];
const imageServices05 = [{ src: SomeImage }];

const OurServices = () => {
  return (
    <div className="text-white mt-32" id="servicos">
      <p className="text-[80px] neue_montreal-font pl-10">Nossos Serviços</p>
      <p className="text-[25px] pl-10 pt-5">
        Realizamos diversos <strong>cursos de capacitação</strong> com convênio
        para aplicar os testes exigidos para a{" "}
        <strong>aquisição</strong> de armas de fogo, <strong>renovação</strong>{" "}
        de registros ou <strong>expedição</strong> de Certificado de
        Registro de CAC (Colecionador - Atirador ou  Caçador).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 pb-20">
        <div className="mr-2 pl-10 pt-10 pr-10">
          {imageServices01.map((imageServices01, idx) => (
            <Image
              key={idx}
              alt="imagem 1"
              src={imageServices01.src}
              className="w-full h-full mr-2"
            />
          ))}
        </div>
        <div className="ml-2 pr-10 pt-10 pl-10">
          <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
            {titleServices01.map((titleServices01, idx) => (
              <p className="text-[32px]" key={idx}>
                {titleServices01.text}
              </p>
            ))}
          </div>
          <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
            {TexServices01.map((TexServices01, idx) => (
              <p className="text-[22px]" key={idx}>
                {TexServices01.text}
              </p>
            ))}
          </div>
        </div>
        <div className="ml-2 pl-10 pt-10 pr-10">
          <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
            {titleServices02.map((titleServices02, idx) => (
              <p className="text-[32px]" key={idx}>
                {titleServices02.text}
              </p>
            ))}
          </div>
          <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
            {TexServices02.map((TexServices02, idx) => (
              <p className="text-[22px]" key={idx}>
                {TexServices02.text}
              </p>
            ))}
          </div>
        </div>
        <div className="mr-2 pr-10 pt-10 pl-10">
          {imageServices02.map((imageServices02, idx) => (
            <Image
              key={idx}
              alt="imagem 2"
              src={imageServices02.src}
              className="w-full h-full mr-2"
            />
          ))}
        </div>
        <div className="mr-2 pl-10 pt-10 pr-10">
          {imageServices03.map((imageServices03, idx) => (
            <Image
              key={idx}
              alt="imagem 3"
              src={imageServices03.src}
              className="w-full h-full mr-2"
            />
          ))}
        </div>
        <div className="ml-2 pr-10 pt-10 pl-10">
          <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
            {titleServices03.map((titleServices03, idx) => (
              <p className="text-[32px]" key={idx}>
                {titleServices03.text}
              </p>
            ))}
          </div>
          <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
            {TexServices03.map((TexServices03, idx) => (
              <p className="text-[22px]" key={idx}>
                {TexServices03.text}
              </p>
            ))}
          </div>
        </div>
        <div className="ml-2 pl-10 pt-10 pr-10">
          <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
            {titleServices04.map((titleServices04, idx) => (
              <p className="text-[32px]" key={idx}>
                {titleServices04.text}
              </p>
            ))}
          </div>
          <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
            {TexServices04.map((TexServices04, idx) => (
              <p className="text-[22px]" key={idx}>
                {TexServices04.text}
              </p>
            ))}
          </div>
        </div>
        <div className="mr-2 pr-10 pt-10 pl-10">
          {imageServices04.map((imageServices04, idx) => (
            <Image
              key={idx}
              alt="imagem 4"
              src={imageServices04.src}
              className="w-full h-full mr-2"
            />
          ))}
        </div>
        <div className="mr-2 pl-10 pt-10 pr-10">
          {imageServices05.map((imageServices05, idx) => (
            <Image
              key={idx}
              alt="imagem 5"
              src={imageServices05.src}
              className="w-full h-full mr-2"
            />
          ))}
        </div>
        <div className="ml-2 pr-10 pt-10 pl-10">
          <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3">
            {titleServices05.map((titleServices05, idx) => (
              <p className="text-[32px]" key={idx}>
                {titleServices05.text}
              </p>
            ))}
          </div>
          <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-28">
            {TexServices05.map((TexServices05, idx) => (
              <p className="text-[22px]" key={idx}>
                {TexServices05.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
