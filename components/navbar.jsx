import logoImage from "../public/images/logoTSC.png";
import botaoFace from "../public/images/Facebookicon.png";
import botaoInsta from "../public/images/Instagramicon.png";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItens = [
  { text: "Home", link: "/" },
  { text: "Serviços", link: "servicos" },
  { text: "Cursos", link: "cursos" },
  { text: "Contato", link: "/contato" },
  { text: "FAQ", link: "/faq" },
  { text: "Seja Sócio", link: "/seja-socio" },
  { text: "Campeonatos", link: "/campeonatos" },
];

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparancyVar = clientWindowHeight / 600;

    if (backgroundTransparancyVar < 1) {
      let paddingVar = 20 - backgroundTransparancyVar * 20;
      let boxShadowVar = backgroundTransparancyVar * 0.1;
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <nav
      className={`bg-gradient-to-b from-neutral-700 to-neutral-900 p-4 fixed top-0 w-full z-10`}
      style={{
        padding: `${padding}px 0px`,
        boxShadow: `rgb( 0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
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
              {navItens.map((navItem, idx) =>
                navItem.link.startsWith("/") ? (
                  <Link key={idx} className="text-white" href={navItem.link}>
                    {navItem.text}
                  </Link>
                ) : (
                  <ScrollLink
                    key={idx}
                    className="text-white cursor-pointer"
                    to={`${navItem.link}`}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={200}
                  >
                    {navItem.text}
                  </ScrollLink>
                )
              )}
            </div>
            <div className="p-3">
              <hr className="px-20" />
            </div>
          </div>
          <div className="w-1/6 flex items-center justify-around">
            <Link href="https://www.facebook.com/taubateshootingclub">
              <Image src={botaoFace} className="h-10" />
            </Link>

            <Link href="https://www.instagram.com/taubateshootingclub">
              <Image src={botaoInsta} className="h-10" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
