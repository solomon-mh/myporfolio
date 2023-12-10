import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  homePosition as HP,
  AboutPosition as AP,
  SkillsPosition as SP,
  ServicePosition as SrvP,
  ProjectPosition as ProjP,
  ContactPosition as CP,
} from "../data/scrollPosition";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log(scrollPosition);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function scrollToSection() {
    console.log("Zero");
  }
  return (
    <header className='header min-w-full left-0 fixed flex justify-between items-center header z-50 bg-headerColor text-white text-xl py-4 px-8 top-0'>
      <h1>
        Solomon <span className='text-brightRed'>Muhye</span>
      </h1>
      <nav className='hidden md:block'>
        <button
          onClick={() => scrollToSection("Hero")}
          className={`${
            HP.min <= scrollPosition && scrollPosition <= HP.max
              ? "text-brightRed"
              : ""
          } navlinks`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("Features")}
          className={`${
            AP.min <= scrollPosition && scrollPosition <= AP.max
              ? "text-brightRed"
              : ""
          } navlinks`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("HowItWorks")}
          className={`${
            SP.min <= scrollPosition && scrollPosition <= SP.max
              ? "text-brightRed"
              : ""
          } navlinks`}
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("Testimonial")}
          className={`${
            SrvP.min <= scrollPosition && scrollPosition <= SrvP.max
              ? "text-brightRed"
              : ""
          } navlinks`}
        >
          Service
        </button>
        <button
          onClick={() => scrollToSection("Pricing")}
          className={`${
            ProjP.min <= scrollPosition && scrollPosition <= ProjP.max
              ? "text-brightRed"
              : ""
          } navlinks`}
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("FAQ")}
          className={`${
            CP.min <= scrollPosition && scrollPosition <= CP.max
              ? "text-brightRed"
              : ""
          } navlinks`}
        >
          Contact
        </button>
        <div className='inline-block cursor-pointer'>
          <FontAwesomeIcon
            style={{ transform: "rotate(180deg)" }}
            icon={faMoon}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
