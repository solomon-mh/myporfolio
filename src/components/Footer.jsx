import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactMe from "./ContactMe";
import MySocialLinks from "./MySocialLinks";
import Section from "./Section";
import {
  faChalkboardUser,
  faContactBook,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { ShootingStarsAndStarsBackground } from "./ShootingStarsAndStarsBackground";

const Footer = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Section
      id="footer"
      className="pt-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <ShootingStarsAndStarsBackground />
      <ContactMe />
      <div className="w-3/4  mx-auto mt-16">
        <div className="mb-8">
          <h1 className="text-3xl"> 𝓢𝓸𝓵𝓸𝓶𝓸𝓷 𝓜𝓾𝓱𝔂𝓮</h1>
          <small className="font-mono text-green-600">
            𝕱𝖚𝖑𝖑𝕾𝖙𝖆𝖈𝖐 𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗
          </small>
        </div>
        <div className="mb-12 flex flex-col gap-6">
          <div
            className="cursor-pointer group duration-300 hover:text-brightRed"
            onClick={() => scrollTo("about")}
          >
            <span className="group-hover:underline">About</span>
            <FontAwesomeIcon
              className="w-4 h-4 mx-1.5 text-brightRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              icon={faChalkboardUser}
            />
          </div>
          <div
            className="cursor-pointer group duration-300 hover:text-brightRed"
            onClick={() => scrollTo("projects")}
          >
            <span className="group-hover:underline">Projects</span>
            <FontAwesomeIcon
              className="w-4 h-4 mx-1.5 text-brightRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              icon={faImage}
            />
          </div>
          <div
            className="cursor-pointer group duration-300 hover:text-brightRed"
            onClick={() => scrollTo("contact")}
          >
            <span className="group-hover:underline">Contact</span>
            <FontAwesomeIcon
              className="w-4 h-4 mx-1.5 text-brightRed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              icon={faContactBook}
            />
          </div>
        </div>
        <MySocialLinks />
        <p className="text-center py-8">Solomon Muhye &copy; 2024</p>
      </div>
    </Section>
  );
};

export default Footer;
