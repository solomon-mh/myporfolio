import { myProjects } from "../data/myProjectsInfo";
import Title from "../utils/Title";

const Projects = () => {
  const myProjectsList = myProjects.map((projects) => {
    return (
      <div
        key={projects.id}
        className='md:w-4/5 relative m-auto shadow-md shadow-slate-900 rounded-2xl cursor-pointer '
      >
        <div className='projects__card relative overflow-hidden'>
          <div className='cursor-pointer'>
            <div className='max-h-80 rounded-xl rounded-b-none overflow-hidden'>
              <img
                className='w-full h-full'
                src={projects.image}
                alt='My Projects image'
              />
            </div>
          </div>
          <div className='text-left p-4'>
            <p className='font-bold py-1.5'>{projects.projectType}</p>
            <p className='text-sm'>{projects.desc}</p>
          </div>
          <div className='projects__modal text-black'>
            <h2 className='text-2xl font-mono font-bold py-1'>
              {projects.projectTitle}
            </h2>
            <h3>{projects.projectType}</h3>
            <a
              target='_blank'
              href={`${projects.link}`}
              className='border-2 rounded-xl px-2 py-1 my-2'
              rel='noreferrer'
            >
              View Demo
            </a>
          </div>
        </div>
        <div className='absolute w-16 text-xs sm:text-base h-16 sm:w-24 sm:h-24 z-30 rounded-full grid flex-wrap items-center  bg-brightRed -top-10 -right-10 shadow-lg shadow-slate-600'>
          {projects.projectTitle}
        </div>
      </div>
    );
  });

  return (
    <div className='hidden md:block text-center'>
      <Title title='Projects' subTitle='most recent projects' />
      <section className=' md:grid grid-cols-2 gap-x-1 gap-y-12'>
        {myProjectsList}
      </section>
    </div>
  );
};

export default Projects;
