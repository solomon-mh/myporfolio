import {
  faBagShopping,
  faChalkboardUser,
  faContactBook,
  faEnvelopeOpenText,
  faHome,
  faImage,
  faMoon,
  faNavicon,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import {
  homePosition as HP,
  AboutPosition as AP,
  SkillsPosition as SP,
  ServicePosition as SrvP,
  ProjectPosition as ProjP,
  ContactPosition as CP,
} from "../data/scrollPosition";
import { darkModeProvider } from "../App";

const Header = () => {
  const { toggleDarkMode, darkMode } = useContext(darkModeProvider);
  // console.log(toggleDarkMode);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // console.log(scrollPosition);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section id='nav'>
      <header className='header hidden min-w-full left-0 fixed sm:flex justify-between items-center header z-50 bg-headerColor text-white text-xl py-4 px-8 top-0'>
        <h1>
          Solomon <span className='text-brightRed'>Muhye</span>
        </h1>
        <nav className='hidden md:block'>
          <button
            onClick={() => scrollToSection("nav")}
            className={`${
              HP.min <= scrollPosition && scrollPosition <= HP.max
                ? "text-brightRed"
                : ""
            } navlinks`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`${
              AP.min <= scrollPosition && scrollPosition <= AP.max
                ? "text-brightRed"
                : ""
            } navlinks`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`${
              SP.min <= scrollPosition && scrollPosition <= SP.max
                ? "text-brightRed"
                : ""
            } navlinks`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`${
              SrvP.min <= scrollPosition && scrollPosition <= SrvP.max
                ? "text-brightRed"
                : ""
            } navlinks`}
          >
            Service
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`${
              ProjP.min <= scrollPosition && scrollPosition <= ProjP.max
                ? "text-brightRed"
                : ""
            } navlinks`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`${
              CP.min <= scrollPosition && scrollPosition <= CP.max
                ? "text-brightRed"
                : ""
            } navlinks`}
          >
            Contact
          </button>
          <button onClick={() => toggleDarkMode()}>
            {darkMode ? (
              <FontAwesomeIcon
                style={{
                  transform: "rotate(180deg)",
                  position: "relative",
                  top: "4px",
                }}
                className={`${darkMode ? "" : "text-black"}`}
                icon={faSun}
              />
            ) : (
              <FontAwesomeIcon
                style={{
                  transform: "rotate(180deg)",
                  position: "relative",
                  top: "4px",
                }}
                className={`${darkMode ? "" : "text-black"}`}
                icon={faMoon}
              />
            )}
          </button>
        </nav>
      </header>
      {/* For Mobile Devices / small devices */}
      <div className='header md:hidden z-40 fixed justify-between py-4 bottom-0 flex w-full bg-headerColor'>
        <div className='px-4'>
          <h1>
            Solomon <span className='text-brightRed'>Muhye</span>
          </h1>
        </div>
        <div className='px-4 flex gap-3'>
          <button onClick={() => toggleDarkMode()}>
            {darkMode ? (
              <FontAwesomeIcon
                style={{
                  transform: "rotate(180deg)",
                }}
                icon={faSun}
              />
            ) : (
              <FontAwesomeIcon
                style={{
                  transform: "rotate(180deg)",
                }}
                icon={faMoon}
              />
            )}
          </button>
          <div
            className='z-50 text-brightRed cursor-pointer'
            onClick={() => toggleMenu()}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faNavicon} />
            )}
          </div>
        </div>
        {menuOpen && (
          <div className='grid grid-cols-3 gap-6 px-16 py-4 pb-8 w-full fixed bottom-0 bg-slate-900 z-30'>
            <div
              onClick={() => scrollToSection("home")}
              className={`${
                HP.min <= scrollPosition && scrollPosition <= HP.max
                  ? "text-brightRed"
                  : ""
              } navlinks`}
            >
              <FontAwesomeIcon icon={faHome} />
              <p> Home</p>
            </div>
            <div
              onClick={() => scrollToSection("about")}
              className={`${
                AP.min <= scrollPosition && scrollPosition <= AP.max
                  ? "text-brightRed"
                  : ""
              } navlinks`}
            >
              <FontAwesomeIcon icon={faChalkboardUser} />
              <p> About</p>
            </div>
            <div
              onClick={() => scrollToSection("skills")}
              className={`${
                SP.min <= scrollPosition && scrollPosition <= SP.max
                  ? "text-brightRed"
                  : ""
              } navlinks`}
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <p> Skills</p>
            </div>
            <div
              onClick={() => scrollToSection("services")}
              className={`${
                SrvP.min <= scrollPosition && scrollPosition <= SrvP.max
                  ? "text-brightRed"
                  : ""
              } navlinks`}
            >
              <FontAwesomeIcon icon={faBagShopping} />
              <p> Services</p>
            </div>
            <div
              onClick={() => scrollToSection("projects")}
              className={`${
                ProjP.min <= scrollPosition && scrollPosition <= ProjP.max
                  ? "text-brightRed"
                  : ""
              } navlinks`}
            >
              <FontAwesomeIcon icon={faImage} />
              <p>Projects</p>
            </div>
            <div
              onClick={() => scrollToSection("contact")}
              className={`${
                CP.min <= scrollPosition && scrollPosition <= CP.max
                  ? "text-brightRed"
                  : ""
              } navlinks`}
            >
              <FontAwesomeIcon icon={faContactBook} />
              <p>Contact</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
