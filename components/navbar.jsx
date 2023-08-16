import logoImage from "../public/images/logoTSC.png";
import botaoFace from "../public/images/Facebookicon.png";
import botaoInsta from "../public/images/Instagramicon.png";

import Image from "next/image";
import Link from "next/link";

const navItens = [
  { text: "Home", link: "link" },
  { text: "Serviços", link: "link" },
  { text: "Cursos", link: "link" },
  { text: "Contato", link: "link" },
  { text: "FAQ", link: "link" },
  { text: "Seja Sócio", link: "link" },
];

import Link from 'next/link';
const Navbar = () => {

  return (
    <>
      <nav className="bg-gradient-to-b from-neutral-700 to-neutral-900 p-4">
        <div className="container mx-auto">
          <div className="flex w-full">
            {/* Logo */}
            <div className="w-1/6 flex justify-center items-center">
              <Link href="/">
                <Image
                  src={logoImage}
                  className="h-20 w-full"
                  alt="Logo Taubaté Shooting Club"
                />
              </Link>
            </div>
            <div className="w-4/6 flex flex-col">
              {/* Navbar Items */}
              <div className="p-3">
                <hr className="px-20" />
              </div>
              <div className="flex justify-around items-center space-x-4 w-full pl-3">
                {navItens.map((navItens, idx) => (
                <Link className="text-white" href={navItens.link}>{navItens.text}</Link>
              ))}
              </div>
              <div className="p-3">
                <hr className="px-20" />
              </div>
            </div>
            <div className="w-1/6 flex items-center justify-around">
              <Link href="/botaoFace">
                <Image src={botaoFace} className="h-10" />
              </Link>

              <Link href="/botaoInsta">
                <Image src={botaoInsta} className="h-10" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const Navbar = () => {
  return (
    <div className="w-[1440px] h-[110px] relative bg-gradient-to-b from-neutral-700 to-neutral-900">
    <div className="w-[181px] h-[111px] left-[39px] top-[-1px] absolute justify-center items-center inline-flex">
        <img className="w-[181px] h-[111px]" src="https://via.placeholder.com/181x111" />
    </div>
    <img className="w-[173px] h-[110px] left-[1220px] top-0 absolute" src="https://via.placeholder.com/173x110" />
    <div className="w-[672px] h-[51px] left-[256px] top-[25px] absolute">
        <div className="w-[817px] h-[0px] left-0 top-0 absolute border border-white"></div>
        <div className="w-[817px] h-[0px] left-0 top-[51px] absolute border border-white"></div>
        <div className="left-[18px] top-[18px] absolute text-center text-white text-xl font-bold">Home</div>
        <div className="left-[135px] top-[18px] absolute text-center text-white text-xl font-bold">Serviços</div>
        <div className="left-[289px] top-[18px] absolute text-center text-white text-xl font-bold">Cursos</div>
        <div className="left-[438px] top-[18px] absolute text-center text-white text-xl font-bold">Contato</div>
        <div className="left-[590px] top-[18px] absolute text-center text-white text-xl font-bold">FAQ</div>
        <div className="left-[696px] top-[18px] absolute text-center text-white text-xl font-bold">Seja Sócio</div>
    </div>
    <img className="w-[42px] h-[42px] left-[1106px] top-[29px] absolute" src="https://via.placeholder.com/42x42" />
    <img className="w-[42px] h-[42px] left-[1167px] top-[29px] absolute" src="https://via.placeholder.com/42x42" />
</div>
  )
}
export default Navbar;
