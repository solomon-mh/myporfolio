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
    const sections = ["home", "about", "services", "projects", "contact"];

    const sectionElements = sections.map((id) => {
      const element = document.getElementById(id);
      return element;
    });

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.getElementById("nav").offsetHeight;

    if (section) {
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY - 80;
      const offsetPosition = sectionPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="nav">
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
