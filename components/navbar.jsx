import logoImage from "../public/images/logoTSC.png";
import botaoFace from "../public/images/Facebookicon.png";
import botaoInsta from "../public/images/Instagramicon.png";

import Image from "next/image";
import NavItems from "./NavItems";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
      className={`bg-gradient-to-b from-neutral-700 to-neutral-900 p-4 top-0 sticky w-full z-10`}
      style={{
        padding: `${padding}px 0px`,
        boxShadow: `rgb( 0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="container mx-auto">
        <div className="flex w-full">
          {/* Logo */}
          <div className="md:w-1/6 w-4/6 flex justify-center items-center">
            <Link href="/">
              <Image
                src={logoImage}
                className="h-20 w-full"
                alt="Logo Taubaté Shooting Club"
              />
            </Link>
          </div>
          <div className="w-4/6 flex flex-col justify-center">
            {/* Navbar Items */}
            <div className="p-3 hidden md:block">
              <hr className="px-20" />
            </div>
            <div className="hidden md:flex space-x-4">
              <NavItems />
            </div>
            <div className="md:hidden self-end mr-10">
              <button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={toggleNavbar}
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
            <div className="p-3 hidden md:block">
              <hr className="px-20" />
            </div>
          </div>
          <div className="md:w-1/6 hidden md:flex items-center justify-around">
            <Link href="https://www.facebook.com/taubateshootingclub">
              <Image src={botaoFace} alt="facebook icon" className="h-10" />
            </Link>

            <Link href="https://www.instagram.com/taubateshootingclub">
              <Image src={botaoInsta} alt="instagram icon" className="h-10" />
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col">
          <NavItems />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
