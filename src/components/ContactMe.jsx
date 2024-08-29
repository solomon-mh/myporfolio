import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import Section from "./Section";

const ContactMe = () => {
  return (
    <Section
      id="contact"
      className="py-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <Title title="Contact Me" subTitle="get in touch" />
      <div className="w-3/4 m-auto">
        <h1 className="text-xl font-bold py-1">Do you have a new project ?</h1>
        <p className="text-sm">
          Contact me and get a{" "}
          <span className="text-green-500 font-extrabold">50%</span> discount on
          your new Project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 my-8">
          <a
            href="https://www.linkedin.com/in/solomonmuhye"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-blue-600 hover:bg-blue-700 px-4 py-3 text-sm rounded-lg text-white flex items-center"
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </i>
            Solomon Muhye
          </a>
          <a
            href="mailto:solomonmuhye12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit bg-gray-900 hover:bg-gray-800 px-4 py-3 text-sm rounded-lg text-white flex items-center transition-colors duration-300"
          >
            <i className="pr-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
            </i>
            <span className="font-medium">SolomonMuhye</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;
