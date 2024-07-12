/* eslint-disable react/prop-types */

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { darkModeProvider } from "../../App";
import { NavLink } from "react-router-dom";
import {
  faChalkboardUser,
  faContactBook,
  faHome,
  faLaptopCode, // Import the new icon
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LargeDeviceHeader = ({ currentSection, scrollToSection }) => {
  const { toggleDarkMode, darkMode } = useContext(darkModeProvider);

  return (
    <header className="header hidden md:flex min-w-full left-0 fixed justify-between items-center z-50 bg-headerColor text-white text-xl py-4 px-8 top-0">
      <h1>
        Solomon <span className="text-purple-600">Muhye</span>
      </h1>
      <nav className="flex space-x-6">
        <NavLink
          onClick={() => scrollToSection("home")}
          className={`navlinks ${
            currentSection === "home" ? "text-brightRed" : ""
          }`}
        >
          <FontAwesomeIcon icon={faHome} />
          <br />
          Home
        </NavLink>
        <NavLink
          onClick={() => scrollToSection("about")}
          className={`navlinks ${
            currentSection === "about" ? "text-brightRed" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChalkboardUser} />
          <br />
          About
        </NavLink>
        <NavLink
          onClick={() => scrollToSection("services")}
          className={`navlinks ${
            currentSection === "services" ? "text-brightRed" : ""
          }`}
        >
          <FontAwesomeIcon icon={faLaptopCode} />
          <br />
          Services + Projects
        </NavLink>
        <NavLink
          onClick={() => scrollToSection("contact")}
          className={`navlinks ${
            currentSection === "contact" ? "text-brightRed" : ""
          }`}
        >
          <FontAwesomeIcon icon={faContactBook} />
          <br />
          Contact Me
        </NavLink>
        <button onClick={() => toggleDarkMode()} className="ml-4">
          {darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default LargeDeviceHeader;
