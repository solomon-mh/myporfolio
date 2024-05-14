import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const SkillList = () => {
  const skillListRef = useRef(null);

  useEffect(() => {
    const skillList = skillListRef.current;
    let scrollPosition = 0;

    const handleScroll = () => {
      const deltaX = window.scrollX - scrollPosition;
      scrollPosition = window.scrollX;
      skillList.style.transform = `translateX(${deltaX * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const technologies = [
    { icon: faReact, name: "React" },
    { icon: faNode, name: "Node.js" },
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3Alt, name: "CSS3" },
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faGitAlt, name: "Git" },
  ];

  return (
    <div className='skill-container overflow-x-hidden whitespace-nowrap'>
      <div
        ref={skillListRef}
        className='skill-list inline-block animate-scroll-x-reverse'
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className='skill-item inline-block px-2.5 py-2.5 mr-4 mt-2 rounded group cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
          >
            <FontAwesomeIcon
              icon={tech.icon}
              className='text-xl text-gray-400 group-hover:text-brightRed transition duration-300 ease-in-out'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
