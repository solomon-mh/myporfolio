import {
  faBagShopping,
  faChalkboardUser,
  faContactBook,
  faEnvelopeOpenText,
  faHome,
  faImage,
  faNavicon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
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
        <nav className='hidden md:blmock md:flex'>
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
              <SunIcon className='w-6 h-6' />
            ) : (
              <MoonIcon className='w-6 h-6 rotate-180' />
            )}
          </button>
        </nav>
      </header>
      {/* For Mobile Devices / small devices */}
      <div
        className={`header fixed md:hidden z-40  justify-between py-4 top-0 flex w-full ${
          darkMode ? "bg-headerColor" : "bg-slate-100"
        } `}
      >
        <div className='px-4'>
          <h1 className=''>
            Solomon <span className='text-brightRed'>Muhye</span>
          </h1>
        </div>
        <div className='px-4 flex gap-3'>
          <button onClick={() => toggleDarkMode()}>
            {darkMode ? (
              <SunIcon className='w-6 h-6' />
            ) : (
              <MoonIcon className='w-6 h-6 rotate-180' />
            )}
          </button>
          <div
            className='z-50 py-1 px-2 text-brightRed cursor-pointer hover:outline-double'
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
          <div
            className={`flex fixed top-full right-0 gap-8 flex-col px-10 py-4 pb-8 h-screen w-fit  ${
              darkMode ? "bg-headerColor z-30" : "bg-slate-100"
            }`}
          >
            <div
              onClick={() => scrollToSection("home")}
              className={`${
                HP.min <= scrollPosition && scrollPosition <= HP.max
                  ? "text-brightRed"
                  : ""
              } navlinks`}
            >
              <FontAwesomeIcon icon={faHome} />
              <span className='inline-block px-2'> Home</span>
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
              <span className='inline-block px-2'> About</span>
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
              <span className='inline-block px-2'> Skills</span>
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
              <span className='inline-block px-2'> Services</span>
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
              <span className='inline-block px-2'>Projects</span>
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
              <span className='inline-block px-2'>Contact</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
