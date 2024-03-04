import { useRef } from "react";
import ContactMe from "./ContactMe";
import MySocialLinks from "./MySocialLinks";
import scrollreveal from "scrollreveal";

const Footer = () => {
  const bottomRef = useRef(null);
  scrollreveal().reveal(bottomRef.current, {
    origin: "bottom",
    distance: "2000px",
    duration: 2000,
    delay: 300,
    easing: "ease",
    reset: true,
  });

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer ref={bottomRef}>
      <ContactMe />
      <div className='px-12 mb-20'>
        <div className='mb-8'>
          <h1 className='text-3xl text-green-600'>Solomon Muhye</h1>
          <small className='font-mono text-orange-400'>
            Fullstack Developer
          </small>
        </div>
        <div className='mb-12 flex flex-col gap-6'>
          <div
            className='cursor-pointer duration-300 hover:text-sky-600'
            onClick={() => scrollTo("services")}
          >
            Services
          </div>
          <div
            className='cursor-pointer duration-300 hover:text-sky-600'
            onClick={() => scrollTo("projects")}
          >
            Projects
          </div>
          <div
            className='cursor-pointer duration-300 hover:text-sky-600'
            onClick={() => scrollTo("contact")}
          >
            Contact
          </div>
        </div>
        <MySocialLinks />
        <p className='text-center py-8'>Solomon Muhye</p>
      </div>
    </footer>
  );
};

export default Footer;
