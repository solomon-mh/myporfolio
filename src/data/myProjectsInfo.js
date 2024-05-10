import projThree from "../assets/sample/jibyte-writers.png";
import jibyteSample from "../assets/sample/jibyeSample.jpg";
import regalSample from "../assets/sample/regalSample.jpg";
import {
  faReact,
  faNode,
  faCss3Alt,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
export const myProjects = [
  {
    id: 1,
    projectTitle: "JiByte Ai Clone",
    image: jibyteSample,
    projectType: "Business Website",
    desc: "an AI website clone that exactly clone the ui of the jibyteai website with RWD.A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
    demoLink: "https://jibyteaiwebsitecloe.netlify.app/",
    githubLink: "https://github.com/SolomonMuhyeY/jibyteWebsiteClone.git",
    technologies: [
      { icon: faReact, name: "React" },
      { icon: faNode, name: "Node.js" },
      { icon: faJsSquare, name: "JavaScript" },
    ],
  },
  {
    id: 2,
    projectTitle: "RegalCanvas",
    image: regalSample,
    projectType: "RegalCanvas",
    desc: "A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
    demoLink: "https://lustrous-biscuit-fd717c.netlify.app",
    githubLink: "https://github.com/SolomonMuhyeY/RegalCanvas.git",
    technologies: [
      { icon: faReact, name: "React" },
      { icon: faNode, name: "Node.js" },
      { icon: faJsSquare, name: "JavaScript" },
      { icon: faGitAlt, name: "Git" },
    ],
  },
  {
    id: 3,
    projectTitle: "#Vanlife",
    image: projThree,
    projectType: "Business Website",
    desc: "Dynamic business sites that reflect your brand and engage customer. It is a website for car Rent for vacation and other stuff. The site implemts Routing and other things.",
    demoLink: "https://example.com",
    githubLink: "https://github.com/SolomonMuhyeY/vanlife.git",
    technologies: [
      { icon: faReact, name: "React" },
      { icon: faCss3Alt, name: "CSS3" },
      { icon: faJsSquare, name: "JavaScript" },
    ],
  },
];
