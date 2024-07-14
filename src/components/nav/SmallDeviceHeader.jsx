/* eslint-disable react/prop-types */
import {
  // faBagShopping,
  faChalkboardUser,
  faContactBook,
  faHome,
  faImage,
  faNavicon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { darkModeProvider } from "../../App";

const SmallDeviceHeader = ({
  currentSection,
  scrollToSection,
  menuOpen,
  toggleMenu,
}) => {
  const { toggleDarkMode, darkMode } = useContext(darkModeProvider);

  return (
    <div
      className={`header fixed md:hidden z-40 justify-between py-4 top-0 flex w-full ${
        darkMode ? "bg-headerColor" : "bg-slate-200"
      }`}
    >
      <div className="px-4">
        <h1>
          Solomon <span className="text-purple">Muhye</span>
        </h1>
      </div>
      <div className="px-4 flex gap-3">
        <button onClick={() => toggleDarkMode()}>
          {darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
        <div
          className="z-50 py-1 px-2 text-brightRed cursor-pointer hover:outline-double"
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
          className={`flex fixed top-full right-0 gap-8 flex-col px-10 py-4 pb-8 h-screen w-fit ${
            darkMode ? "bg-headerColor z-30" : "bg-slate-200"
          }`}
        >
          <div
            onClick={() => scrollToSection("home")}
            className={`${
              currentSection === "home" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="inline-block px-2"> Home</span>
          </div>
          <div
            onClick={() => scrollToSection("about")}
            className={`${
              currentSection === "about" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faChalkboardUser} />
            <span className="inline-block px-2"> About</span>
          </div>
          {/* <div
            onClick={() => scrollToSection("services")}
            className={`${
              currentSection === "services" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faBagShopping} />
            <span className="inline-block px-2"> Services</span>
          </div> */}
          <div
            onClick={() => scrollToSection("projects")}
            className={`${
              currentSection === "projects" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faImage} />
            <span className="inline-block px-2">Projects</span>
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className={`${
              currentSection === "contact" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faContactBook} />
            <span className="inline-block px-2">Contact</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallDeviceHeader;
