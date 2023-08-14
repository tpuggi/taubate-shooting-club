import logoImage from "../public/images/logoTSC.png";
import botaoFace from "../public/images/Facebookicon.png";
import botaoInsta from "../public/images/Instagramicon.png";

import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gradient-to-b from-neutral-700 to-neutral-900 p-4">
        <div className="container mx-auto">
          <div className="flex w-full">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <Link href="/">
                <Image
                  src={logoImage}
                  className="h-20 w-full"
                  alt="Logo Taubaté Shooting Club"
                  // layout="responsive"
                />
              </Link>
            </div>
            <div className="w-full flex flex-col">
              {/* Navbar Items */}
              <div className="pl-20 p-3">
                <hr className="px-20" />
              </div>
              <div className="flex justify-around items-center space-x-4 w-full pl-20">
                <Link href="/home">
                  <p className="text-white">Home</p>
                </Link>
                <Link href="/services">
                  <p className="text-white">Serviços</p>
                </Link>
                <Link href="/cursos">
                  <p className="text-white">Cursos</p>
                </Link>
                <Link href="/contact">
                  <p className="text-white">Contato</p>
                </Link>
                <Link href="/faq">
                  <p className="text-white">FAQ</p>
                </Link>
                <Link href="/sejaSocio">
                  <p className="text-white">Seja Sócio</p>
                </Link>
              </div>
              <div className="pl-20 p-3">
                <hr className="px-20" />
              </div>
            </div>
            <div className="flex items-center justify-around">
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
