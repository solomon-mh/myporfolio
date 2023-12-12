import { useState } from "react";
import { myProjects } from "../data/myProjectsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import Title from "../utils/Title";

const Projects = () => {
  const myProjectsList = myProjects.map((projects) => projects);
  const [currentProject, setCurrentProject] = useState(0);
  const handleBtnClick = (direction) => {
    const totPro = myProjectsList.length;
    if (direction === "left") {
      setCurrentProject((prev) => (prev - 1 + totPro) % totPro);
    } else if (direction === "right") {
      setCurrentProject((prev) => (prev + 1) % totPro);
    }
  };

  return (
    <div className='text-center'>
      <Title title='Projects' subTitle='most recent projects' />
      <section className='w-9/10 sm:w-3/4 m-auto flex items-center'>
        <div className='pr-4'>
          <button onClick={() => handleBtnClick("left")}>
            <i>
              <FontAwesomeIcon
                icon={faLessThan}
                style={{ fontSize: "large" }}
              />
            </i>
          </button>
        </div>
        <section className='relative m-auto shadow-md shadow-slate-900 rounded-2xl'>
          <article className='projects__card overflow-hidden relative'>
            <div className='relative cursor-pointer'>
              <div className='rounded-xl max-h-72 rounded-b-none overflow-hidden'>
                <img
                  className='w-full h-full'
                  src={myProjectsList[currentProject].image}
                  alt='My Projects image'
                />
              </div>
            </div>
            <div className='text-left p-4'>
              <p className='font-bold py-1.5'>
                {myProjectsList[currentProject].projectType}
              </p>
              <p className='text-sm'>{myProjectsList[currentProject].desc}</p>
            </div>
            <div className='projects__modal text-brightRed'>
              <h2 className='text-2xl py-1 font-mono font-bold'>
                {myProjectsList[currentProject].projectTitle}
              </h2>
              <h3> {myProjectsList[currentProject].projectType}</h3>
              <a href='#' className='border-2 rounded-xl px-2 py-1 my-2'>
                View Demo
              </a>
            </div>
          </article>
          <div className='absolute w-16 text-xs sm:text-base h-16  rounded-full grid flex-wrap items-center  bg-brightRed -top-8 -right-8 shadow-lg shadow-slate-600 z-30'>
            {myProjectsList[currentProject].projectTitle}
          </div>
        </section>
        <div className='pl-4'>
          <button onClick={() => handleBtnClick("right")}>
            <i>
              <FontAwesomeIcon
                icon={faGreaterThan}
                style={{ fontSize: "large" }}
              />
            </i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
