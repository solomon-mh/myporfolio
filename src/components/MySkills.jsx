import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faNode,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const MySkills = () => {
  const skillsIcons = {
    HTML5: faHtml5,
    Css: faCss3,
    Bootstrap: faBootstrap,
    Javascript: faJs,
    React: faReact,
    Node: faNode,
    java: faJava,
    Php: faPhp,
  };
  const mySkills = [
    "HTML",
    "Css",
    "JavaScript",
    "TailwindCss",
    "ReactJs",
    "BootStrap",
    "MUI",
    "Node.Js",
    "MongoDB",
    "MySQL",
    "Java",
    "Php",
  ];
  return (
    <section id='skills' className='text-center'>
      <Title title='Skills' subTitle='My technical skills' />
      <div className='skills w-fit md:hidden sm:w-4/5 m-auto grid  grid-cols-3 gap-4 px-12 py-6'>
        {mySkills.map((skill) => {
          return (
            <div
              className='bg-indigo-400 text-sm px-2 sm:text-base cursor-pointer duration-500 py-1 rounded hover:bg-indigo-600'
              key={crypto.randomUUID()}
            >
              {skill}
            </div>
          );
        })}
      </div>
      {/* For Larger Devices */}
      <div className=' hidden md:flex md:w-4/5 lg:w-3/5 my-12 mb-24 cursor-pointer flex-wrap m-auto gap-12 justify-center'>
        {Object.entries(skillsIcons).map(([name, icon]) => {
          return (
            <div
              className='skill-icons duration-500 w-32 h-32 flex flex-col justify-center items-center rounded-full border-2 '
              key={crypto.randomUUID()}
            >
              <div className='text-4xl '>
                <FontAwesomeIcon icon={icon} />
              </div>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MySkills;
