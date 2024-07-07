import ContactMe from "./ContactMe";
import MySocialLinks from "./MySocialLinks";

const Footer = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <ContactMe />
      <hr className="my-8" />
      <div className="w-3/4  mx-auto my-16 mb-4">
        <div className="mb-8">
          <h1 className="text-3xl text-green-600">Solomon Muhye</h1>
          <small className="font-mono text-orange-400">
            Fullstack Developer
          </small>
        </div>
        <div className="mb-12 flex flex-col gap-6">
          <div
            className="cursor-pointer duration-300 hover:text-sky-600"
            onClick={() => scrollTo("about")}
          >
            About
          </div>
          <div
            className="cursor-pointer duration-300 hover:text-sky-600"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </div>
          <div
            className="cursor-pointer duration-300 hover:text-sky-600"
            onClick={() => scrollTo("contact")}
          >
            Contact
          </div>
        </div>
        <MySocialLinks />
        <p className="text-center py-8">Solomon Muhye &copy; 2024</p>
      </div>
    </>
  );
};

export default Footer;
