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
export default Navbar;
