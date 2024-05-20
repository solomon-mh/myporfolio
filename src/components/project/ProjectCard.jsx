/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import ProjectDescription from "./ProjectDescription";
import ProjectImage from "./ProjectImage";

function Card({ project, index }) {
  const topRef = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(topRef.current, {
      origin: "bottom",
      distance: "300px",
      duration: 3000,
      delay: 300,
      easing: "ease",
      reset: true,
    });
  }, []);
  return (
    <div
      ref={topRef}
      className='grid grid-cols-1 w-4/5 rounded-2xl mx-auto md:grid-cols-2 gap-8'
    >
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
