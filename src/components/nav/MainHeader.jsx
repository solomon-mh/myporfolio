import { useEffect, useState } from "react";
import LargeDeviceHeader from "./LargeDeviceHeader";
import SmallDeviceHeader from "./SmallDeviceHeader";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutSection = document.getElementById("about").offsetTop;
      const servicesSection = document.getElementById("services").offsetTop;
      const projectsSection = document.getElementById("projects").offsetTop;
      const contactSection = document.getElementById("contact").offsetTop;

      if (scrollPosition < aboutSection) {
        setCurrentSection("home");
      } else if (scrollPosition < servicesSection) {
        setCurrentSection("about");
      } else if (scrollPosition < projectsSection) {
        setCurrentSection("services");
      } else if (scrollPosition < contactSection) {
        setCurrentSection("projects");
      } else {
        setCurrentSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleOutsideClick = (e) => {
      const navArea = document.getElementById("nav");

      if (navArea && !navArea.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='nav'>
      <LargeDeviceHeader
        currentSection={currentSection}
        scrollToSection={scrollToSection}
      />
      <SmallDeviceHeader
        currentSection={currentSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
    </section>
  );
};

export default Header;
