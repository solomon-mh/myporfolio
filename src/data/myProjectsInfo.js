import projThree from "../assets/sample/jibyte-writers.png";
import jibyteSample from "../assets/sample/jibyeSample.jpg";
import regalSample from "../assets/sample/regalSample.jpg";
import {
  faReact,
  faNode,
  faSass,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
export const myProjects = [
  {
    id: 1,
    projectTitle: "JiByte Ai Ui Clone",
    image: jibyteSample,
    projectType: "Business Website",
    desc: "an AI website clone that exactly clone the ui of the jibyteai website with RWD.A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
    demoLink: "https://jibyteaiwebsitecloe.netlify.app/",
    githubLink: "https://github.com/solomon-mh/ai-website-clone",
    technologies: [
      { icon: faSass, name: "Sass" },
      { icon: faReact, name: "React" },
      { icon: faNode, name: "Node.js" },
    ],
  },
  {
    id: 2,
    projectTitle: "RegalCanvas",
    image: regalSample,
    projectType: "RegalCanvas",
    desc: "A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
    demoLink: "https://lustrous-biscuit-fd717c.netlify.app",
    githubLink: "https://github.com/solomon-mh/regalcanvas.git",
    technologies: [
      { icon: faReact, name: "React" },
      { icon: faNode, name: "Node.js" },
    ],
  },
  {
    id: 3,
    projectTitle: "#Vanlife",
    image: projThree,
    projectType: "Business Website",
    desc: "Dynamic business sites that reflect your brand and engage customer. It is a website for car Rent for vacation and other stuff. The site implemts Routing and other things.",
    demoLink: "https://example.com",
    githubLink: "https://github.com/solomon-mh/vanlife.git",
    technologies: [
      { icon: faReact, name: "React" },
      { icon: faLeaf, name: "Tailwind" },
      { icon: faPython, name: "Django" },
    ],
  },
];
