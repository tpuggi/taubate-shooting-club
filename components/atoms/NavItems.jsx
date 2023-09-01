import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const NAVITEMS = [
  { text: "Home", link: "/" },
  { text: "Serviços", link: "servicos" },
  {
    text: "Cursos",
    link: "cursos",
    dropdown: [
      {
        text: "Fundamentos do Tiro",
        link: "/cursos/fundamentos-tiro",
      },
      {
        text: "Capacitação",
        link: "/cursos/capacitacao",
      },
      {
        text: "Operador de Pistola",
        link: "/cursos/operador-pistola",
      },
      {
        text: "Armamento e Tiro",
        link: "/cursos/armamento-e-tiro",
      },
    ],
  },
  { text: "Contato", link: "/contato" },
  { text: "FAQ", link: "/faq" },
  { text: "Seja Sócio", link: "/seja-socio" },
  { text: "Campeonatos", link: "/campeonatos" },
];

function NavItems() {
  return (
    <>
      {NAVITEMS.map((navItem, idx) => {
        if (navItem.link.startsWith("/")) {
          if (navItem.dropdown) {
            return (
              <div key={idx}>
                <Link
                  id="dropdownHoverLink"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  href={navItem.link}
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
                <div
                  id="dropdownHover"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownHoverLink"
                  >
                    {navItem.dropdown.map((dropdownItem, idx2) => (
                      <li key={idx2}>
                        <Link
                          className="block px-4 py-2 hover:bg-gray-100 "
                          href={dropdownItem.link}
                        >
                          {dropdownItem.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          } else {
            return (
              <Link key={idx} className="text-white" href={navItem.link}>
                {navItem.text}
              </Link>
            );
          }
        } else if (navItem.dropdown) {
          return (
            <div
              id="dropdownHoverLink"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              key={idx}
            >
              <ScrollLink
                className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer"
                to={navItem.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={200}
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
              <div
                id="dropdownHover"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownHoverLink"
                >
                  {navItem.dropdown.map((dropdownItem, idx2) => (
                    <li key={idx2}>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-100 "
                        href={dropdownItem.link}
                      >
                        {dropdownItem.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        } else {
          return (
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
          );
        }
      })}
    </>
  );
}

export default NavItems;
