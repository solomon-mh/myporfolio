/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectDescription({ project }) {
  return (
    <div className='px-6 py-8 text-center leading-relaxed rounded-lg shadow-md'>
      <p className='text-2xl font-medium mb-2'>{project.projectTitle}</p>
      <p className='text-gray-600 text-xl mb-4'>{project.projectType}</p>
      <p className='text-gray-600 mb-6 text-center'>{project.desc}</p>
      <div className='flex justify-center  space-x-8 my-8'>
        {project.technologies.map((tech, index) => (
          <div
            key={index}
            className=' group cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
          >
            <FontAwesomeIcon
              icon={tech.icon}
              size='2xl'
              className='text-xl text-gray-400 group-hover:text-brightRed transition duration-300 ease-in-out'
            />
            {/* <span className='block'>{tech.name}</span> */}
          </div>
        ))}
      </div>
      <div className='flex justify-center space-x-4'>
        <a
          target='_blank'
          href={project.githubLink}
          rel='noreferrer'
          className='flex items-center text-blue-500 hover:text-blue-700'
        >
          <FontAwesomeIcon icon={faGithub} className='mr-2' />
          View Code
        </a>
        <a
          target='_blank'
          href={project.demoLink}
          rel='noreferrer'
          className='flex items-center text-blue-500 hover:text-blue-700'
        >
          <FontAwesomeIcon className='mr-2' icon={faLink} />
          View Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectDescription;
