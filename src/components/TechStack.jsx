import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const TechStack = () => {
  const technologies = [
    { icon: faReact, name: "React" },
    { icon: faNode, name: "Node.js" },
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3Alt, name: "CSS3" },
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faGitAlt, name: "Git" },
  ];

  return (
    <div className='flex justify-center  space-x-8 my-8'>
      {technologies.map((tech, index) => (
        <div
          key={index}
          className=' group cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
        >
          <FontAwesomeIcon
            icon={tech.icon}
            className='text-xl text-gray-400 group-hover:text-brightRed transition duration-300 ease-in-out'
          />
        </div>
      ))}
    </div>
  );
};

export default TechStack;
