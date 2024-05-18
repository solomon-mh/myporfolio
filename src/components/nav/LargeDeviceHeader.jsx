/* eslint-disable react/prop-types */

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { darkModeProvider } from "../../App";

const LargeDeviceHeader = ({ currentSection, scrollToSection }) => {
  const { toggleDarkMode, darkMode } = useContext(darkModeProvider);

  return (
    <header className='hidden sm:flex min-w-full left-0 fixed justify-between items-center z-50 bg-headerColor text-white text-xl py-4 px-8 top-0'>
      <h1>
        Solomon <span className='text-brightRed'>Muhye</span>
      </h1>
      <nav className='flex'>
        <button
          onClick={() => scrollToSection("nav")}
          className={`${
            currentSection === "home" ? "text-brightRed" : ""
          } navlinks`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`${
            currentSection === "about" ? "text-brightRed" : ""
          } navlinks`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("services")}
          className={`${
            currentSection === "services" ? "text-brightRed" : ""
          } navlinks`}
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className={`${
            currentSection === "projects" ? "text-brightRed" : ""
          } navlinks`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className={`${
            currentSection === "contact" ? "text-brightRed" : ""
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
  );
};

export default LargeDeviceHeader;
