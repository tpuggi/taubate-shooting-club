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
        text: "Cursos de iniciação no tiro",
        drop_link: "basic_course",
      },
      {
        text: "Cursos de aprimoramento no tiro",
        drop_link: "advanced_course",
      },
    ],
  },
  { text: "Contato", link: "/contatos" },
  { text: "Seja Sócio", link: "/sejaSocio" },
  { text: "FAQ", link: "/faq" },
  { text: "Ranking", link: "/ranking" },
  { text: "Calendário", link: "/calendar" },
  { text: "Campeonatos", link: "/campeonatos" },
];

function NavItems() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 mx-5 text-white inter-font">
      {NAVITEMS.map((navItem, idx) => {
        if (navItem.scroll) {
          if (navItem.dropdown) {
            return (
              <div key={idx}>
                <ScrollLink
                  className="pl-2 md:bg-none bg-gradient-to-l my-1 from-neutral-700 to-neutral-900 flex-row flex py-2 rounded md:bg-transparent md:p-0 md:inline-flex justify-start items-center cursor-pointer hover:text-gray-400"
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
                              className="hover:text-gray-400"
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
                className="pl-2 md:bg-none bg-gradient-to-l my-1 from-neutral-700 to-neutral-900  flex-col flex py-2 rounded md:bg-transparent md:p-0 md:inline-flex cursor-pointer hover:text-gray-400"
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
              className="pl-2 my-1 md:bg-none bg-gradient-to-l from-neutral-700 to-neutral-900  flex-col flex py-2 rounded md:bg-transparent md:p-0 md:inline-flex cursor-pointer hover:text-gray-400"
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
              className="pl-2 my-1 md:bg-none bg-gradient-to-l from-neutral-700 to-neutral-900  flex-col flex py-2 rounded md:bg-transparent md:p-0 md:inline-flex cursor-pointer hover:text-gray-400"
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
