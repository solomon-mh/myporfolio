import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faGitAlt,
  faPython,
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
    { icon: faHtml5, name: "HTML5", type: "fontawesome" },
    { icon: faCss3Alt, name: "CSS3", type: "fontawesome" },
    { icon: faJsSquare, name: "JavaScript", type: "fontawesome" },
    { icon: faPython, name: "Python", type: "fontawesome" },
    { icon: faReact, name: "React", type: "fontawesome" },
    { icon: faNode, name: "Node.js", type: "fontawesome" },
    { icon: null, name: "DJ", type: "text" },
    { icon: faGitAlt, name: "Git", type: "fontawesome" },
    // { icon: null, name: "N", type: "text" },
  ];

  return (
    <div className="skill-container my-8 overflow-x-hidden whitespace-nowrap">
      <div
        ref={skillListRef}
        className="skill-list inline-block animate-scroll-x-reverse"
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="inline-block mx-6 rounded group cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            {tech.type === "fontawesome" ? (
              <FontAwesomeIcon
                icon={tech.icon}
                className="text-xl text-gray-400 group-hover:text-brightRed transition duration-300 ease-in-out"
              />
            ) : (
              <p className="text-xl text-gray-400 font-semibold group-hover:text-brightRed transition duration-300 ease-in-out">
                dj
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillList;
