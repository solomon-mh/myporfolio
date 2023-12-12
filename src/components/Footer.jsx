import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='px-12 mb-20'>
      <div className='mb-8'>
        <h1 className='text-3xl text-green-600'>Solomon Muhye</h1>
        <small className='font-mono text-orange-400'>Fullstack Developer</small>
      </div>
      <div className='mb-12 flex flex-col gap-6'>
        <div
          className='cursor-pointer duration-300 hover:text-sky-600'
          onClick={() => scrollTo("service")}
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
      <div className='flex gap-6'>
        <FontAwesomeIcon icon={faLinkedinIn} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <p className='text-center py-8'>Solomon Muhye</p>
    </div>
  );
};

export default Footer;
