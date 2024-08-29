/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faContactBook,
  faHome,
  faImage,
  faNavicon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import lightLogoR from "../../assets/logo/lightLogoR.png";
import darkLogoR1 from "../../assets/logo/darkLogoR1.png";
const SmallDeviceHeader = ({
  currentSection,
  scrollToSection,
  menuOpen,
  toggleMenu,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="header fixed md:hidden z-40 justify-between py-4 top-0 flex w-full">
      <div className={`relative w-64 h-20 overflow-hidden rounded-2xl`}>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={isDarkMode ? darkLogoR1 : lightLogoR}
          alt="Logo"
        />
      </div>
      <div className=" ml-auto px-4 flex gap-3 items-center">
        <button onClick={toggleTheme}>
          {isDarkMode ? (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          ) : (
            <MoonIcon className="w-6 h-6 text-gray-800" />
          )}
        </button>
        <div
          className="z-50 py-1 px-2 text-brightRed cursor-pointer hover:outline-double"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faNavicon} />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-full right-0 flex flex-col gap-8 px-10 py-4 pb-8 h-screen w-fit z-30">
          <div
            onClick={() => {
              scrollToSection("home");
              toggleMenu();
            }}
            className={`${
              currentSection === "home" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="inline-block px-2">Home</span>
          </div>
          <div
            onClick={() => {
              scrollToSection("about");
              toggleMenu();
            }}
            className={`${
              currentSection === "about" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faChalkboardUser} />
            <span className="inline-block px-2">About</span>
          </div>
          <div
            onClick={() => {
              scrollToSection("projects");
              toggleMenu();
            }}
            className={`${
              currentSection === "projects" ? "text-brightRed" : ""
            } navlinks`}
          >
            <FontAwesomeIcon icon={faImage} />
            <span className="inline-block px-2">Projects</span>
          </div>
          <div
            onClick={() => {
              scrollToSection("contact");
              toggleMenu();
            }}
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
