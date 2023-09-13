import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const NAVITEMS = [
  { text: "Home", link: "/" },
  {
    text: "Cursos",
    link: "/",
    scroll: "cursos",
    dropdown: [
      {
        text: "Fundamentos do Tiro",
        drop_link: "/cursos/fundamentos-tiro",
      },
      {
        text: "Capacitação",
        drop_link: "/cursos/capacitacao",
      },
      {
        text: "Operador de Pistola",
        drop_link: "/cursos/operador-pistola",
      },
      {
        text: "Armamento e Tiro",
        drop_link: "/cursos/armamento-e-tiro",
      },
    ],
  },
  { text: "Contato", link: "/contatos" },
  { text: "FAQ", link: "/faq" },
  { text: "Seja Sócio", link: "/sejaSocio" },
  { text: "Campeonatos", link: "/campeonatos" },
];

function NavItems() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-around items-center space-x-4 w-full pl-3 text-white">
      {NAVITEMS.map((navItem, idx) => {
        if (navItem.scroll) {
          if (navItem.dropdown) {
            return (
              <div key={idx}>
                <ScrollLink
                  className="text-center inline-flex items-center cursor-pointer hover:text-gray-400"
                  to={navItem.scroll}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  onMouseEnter={handleDropdownToggle}
                  duration={500}
                >
                  {navItem.text}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </ScrollLink>
                {navItem.dropdown && (
                  <div className="relative group">
                    {isDropdownOpen && (
                      <ul
                        className="absolute mt-2 p-2 bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-lg rounded-lg flex flex-col whitespace-nowrap"
                        onMouseLeave={handleDropdownToggle}
                      >
                        {navItem.dropdown.map((subItem, idx2) => (
                          <li key={idx2} className="pb-1">
                            <Link
                              href={subItem.drop_link}
                              className=" hover:text-gray-400"
                            >
                              {subItem.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <ScrollLink
                key={idx}
                to={navItem.scroll}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="text-white hover:text-gray-400"
                href={navItem.link}
              >
                {navItem.text}
              </ScrollLink>
            );
          }
        } else if (navItem.dropdown) {
          return (
            <Link
              key={idx}
              className="text-center inline-flex items-center cursor-pointer hover:text-gray-400"
              href={navItem.link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onMouseEnter={handleDropdownToggle}
            >
              {navItem.text}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Link>
          );
        } else {
          return (
            <Link
              key={idx}
              className="text-white hover:text-gray-400"
              href={navItem.link}
            >
              {navItem.text}
            </Link>
          );
        }
      })}
    </div>
  );
}

export default NavItems;
