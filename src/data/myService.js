import {
  faReact,
  faNode,
  faSass,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import sample1 from "../assets/sample/coder.jpg";
import sample2 from "../assets/sample/coder2.jpg";
import sample4 from "../assets/sample/regalSample.jpg";
import sample5 from "../assets/sample/code.png";
import jibyte1 from "../assets/project_samples/jibyete1.jpg";
import jibyte2 from "../assets/project_samples/jibyte2.jpg";
import jibyte3 from "../assets/project_samples/jibyte3.jpg";
import jibyte4 from "../assets/project_samples/jibyte4.jpg";

export const myServices = [
  {
    id: 1,
    sampleProjects: [
      {
        projImg: [jibyte1, jibyte2, jibyte3, jibyte4],
        desc: "an AI website clone that exactly clone the ui of the jibyteai website with RWD.A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
        demoLink: "https://jibyteaiwebsitecloe.netlify.app/",
        githubLink: "https://github.com/solomon-mh/jibyteWebsiteClone.git",
        technologies: [
          { icon: faSass, name: "Sass" },
          { icon: faReact, name: "React" },
          { icon: faNode, name: "Node.js" },
        ],
      },
      {
        projImg: [sample1, jibyte2, sample2, jibyte4],
        desc: "an AI website clone that exactly clone the ui of the jibyteai website with RWD.A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
        demoLink: "https://jibyteaiwebsitecloe.netlify.app/",
        githubLink: "https://github.com/solomon-mh/jibyteWebsiteClone.git",
        technologies: [
          { icon: faSass, name: "Sass" },
          { icon: faReact, name: "React" },
          { icon: faNode, name: "Node.js" },
        ],
      },
    ],
    serviceName: "Frontend Developer",
    services: [
      "Responsive Web Design (RWD)",
      "Cross-Browser Compatibility",
      "Performance Optimization",
      "Client-Side Frameworks (React, Angular, Vue)",
      "UX/UI Design",
      "Progressive Web Apps (PWAs)",
      "State Management (Redux, MobX)",
      "CSS Preprocessing (Sass, Less)",
    ],
  },
  {
    id: 2,
    sampleProjects: [
      {
        projImg: [sample4, sample5, jibyte3, sample1],
        desc: "A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
        demoLink: "https://lustrous-biscuit-fd717c.netlify.app",
        githubLink: "https://github.com/solomon-mh/RegalCanvas.git",
        technologies: [
          { icon: faReact, name: "React" },
          { icon: faNode, name: "Node.js" },
        ],
      },
      {
        projImg: [sample1, jibyte2, sample1, jibyte4],
        desc: "A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
        demoLink: "https://lustrous-biscuit-fd717c.netlify.app",
        githubLink: "https://github.com/solomon-mh/RegalCanvas.git",
        technologies: [
          { icon: faReact, name: "React" },
          { icon: faNode, name: "Node.js" },
        ],
      },
    ],
    serviceName: "Backend Developer",
    services: [
      "RESTful API Development",
      "Database Management (SQL, NoSQL)",
      "Server-Side Optimization",
      "Security and Authentication",
      "Microservices Architecture",
      "Cloud Integration (AWS, Azure)",
      "DevOps Practices (CI/CD, Docker, Kubernetes)",
      "Automated Testing (Unit, Integration, End-to-End)",
    ],
  },
  {
    id: 3,
    sampleProjects: [
      {
        projImg: [jibyte1, sample1, jibyte3, sample4],
        desc: "Dynamic business sites that reflect your brand and engage customer. It is a website for car Rent for vacation and other stuff. The site implements Routing and other things.",
        demoLink: "https://example.com",
        githubLink: "https://github.com/solomon-mh/vanlife.git",
        technologies: [
          { icon: faReact, name: "React" },
          { icon: faLeaf, name: "Tailwind" },
          { icon: faPython, name: "Django" },
        ],
      },
      {
        projImg: [sample1, jibyte2, sample1, jibyte4],
        desc: "an AI website clone that exactly clone the ui of the jibyteai website with RWD.A project that represents a platform or template designed for creating striking and impressive portfolios or websites, akin to a canvas upon which one can showcase their skills, talents, and achievements in a regal manner.",
        demoLink: "https://jibyteaiwebsitecloe.netlify.app/",
        githubLink: "https://github.com/solomon-mh/jibyteWebsiteClone.git",
        technologies: [
          { icon: faSass, name: "Sass" },
          { icon: faReact, name: "React" },
          { icon: faNode, name: "Node.js" },
        ],
      },
    ],
    serviceName: "Fullstack Developer",
    services: [
      "End-to-End Web Development",
      "Integration of Frontend and Backend",
      "Scalable and Maintainable Architecture",
      "Data Modeling and ORM (Mongoose, Sequelize)",
      "Version Control (Git, GitHub)",
      "Real-Time Applications (WebSockets, Socket.io)",
      "API Design and Documentation (Swagger, OpenAPI)",
      "Continuous Deployment and Monitoring",
    ],
  },
];
