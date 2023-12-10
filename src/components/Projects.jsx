import { useState } from "react";
import { myProjects } from "../data/myProjectsInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      <h1 className='text-4xl font-bold py-2'>Projects</h1>
      <small className='inline-block font-serif text-orange-400 pb-4'>
        most recent projects
      </small>
      <section className='w-3/4 m-auto flex items-center gap-6'>
        <div>
          <button onClick={() => handleBtnClick("left")}>
            <i>
              <FontAwesomeIcon icon={faArrowLeft} />
            </i>
          </button>
        </div>
        <section className='border-2 rounded-2xl p-3'>
          <div className='relative cursor-pointer'>
            <img src={myProjectsList[currentProject].image} alt='' />
            <div className='absolute w-24 h-24 rounded-full grid flex-wrap items-center  bg-green-300 -top-12 -right-12   shadow-lg shadow-slate-300'>
              {myProjectsList[currentProject].projectTitle}
            </div>
          </div>
          <div className='text-left'>
            <p className='font-bold py-1.5'>
              {myProjectsList[currentProject].projectType}
            </p>
            <p className='text-sm'>{myProjectsList[currentProject].desc}</p>
          </div>
        </section>
        <div>
          <button onClick={() => handleBtnClick("right")}>
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
