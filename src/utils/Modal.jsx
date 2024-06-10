/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myServices } from "../data/myService";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "../components/ImageSlider";

const Modal = ({ id }) => {
  const indvService = myServices.find((service) => service.id === Number(id));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!indvService) {
    return null; // Handle case where id does not match any service
  }

  return (
    <div>
      <div>
        <div className='hidden md:grid flex-col-reverse lg:grid-cols-2 gap-4'>
          {indvService.sampleProjects
            .map((project, index) => (
              <div
                key={index}
                className='relative w-full h-48 md:h-56 lg:h-64'
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <ImageSlider images={project.projImg} />
                {hoveredIndex === index && (
                  <div className='absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center'>
                    <div className='proj_desc text-white text-center p-4'>
                      <p className='mb-4'>
                        {project.desc.length > 80
                          ? `${project.desc.substring(0, 80)}...`
                          : project.desc}
                      </p>
                      <div className='flex flex-wrap justify-center gap-2 mb-4'>
                        {project.technologies.map((tech, index) => (
                          <i
                            key={index}
                            className='text-2xl text-amber-500 duration-200 hover:text-brightRed hover:translate-y-1'
                          >
                            <FontAwesomeIcon icon={tech.icon} />
                          </i>
                        ))}
                      </div>
                      <div className='flex justify-center gap-4'>
                        <a
                          href={project.demoLink}
                          className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out'
                        >
                          View Demo
                        </a>
                        <a
                          href={project.githubLink}
                          className='py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300 ease-in-out'
                        >
                          View Repo
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
            .reverse()}
        </div>
        <hr className='my-4 h-2' />
        <div className='mx-5 mt-6'>
          <div className='text-left mb-6 text-blue-500 underline'>
            <h2 className='text-2xl font-bold mt-4'>
              My Service as, {indvService.serviceName}
            </h2>
            <p className='text-gray-600 mt-2'>{indvService.description}</p>
          </div>
          <ul className='my-4 text-left w-full m-auto'>
            {indvService.services.map((service, index) => (
              <li
                key={index}
                className='my-3 text-xs sm:text-base flex items-center'
              >
                <span className='rounded-full bg-green-500 text-white flex items-center justify-center w-6 h-6 mr-4'>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
