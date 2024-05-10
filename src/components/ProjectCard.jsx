/* eslint-disable react/prop-types */
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

function Card({ project, index }) {
  return (
    <div className='grid grid-cols-1 w-5/6 rounded-2xl mx-auto md:grid-cols-2 gap-8'>
      {index % 2 == 0 ? (
        <>
          <ProjectImage projImg={project.image} />
          <ProjectDescription project={project} />
        </>
      ) : (
        <>
          <ProjectDescription project={project} />
          <ProjectImage projImg={project.image} />
        </>
      )}
    </div>
  );
}

export default Card;
