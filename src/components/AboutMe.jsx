import ScrollReveal from "scrollreveal";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import MyImage from "./MyImage";
import { useEffect, useRef } from "react";
import { handleDownload } from "../utils/cvDownloader";

const AboutMe = () => {
  const rightRef = useRef(null);
  const leftRef = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(rightRef.current, {
      origin: "right",
      distance: "300px",
      rotate: { y: 90 },
      duration: 2000,
      delay: 300,
      easing: "ease",
      reset: true,
    });
    ScrollReveal().reveal(leftRef.current, {
      origin: "left",
      distance: "100px",
      rotate: { y: 180 },
      duration: 2000,
      delay: 300,
      easing: "ease",
      reset: true,
    });
  }, []);
  return (
    <section id='about' className='mx-12 text-center py-8'>
      <Title title='About Me' subTitle='My introduction' />
      <figure ref={rightRef}>
        <MyImage />
      </figure>
      <article ref={leftRef} className='md:w-3/5 m-auto leading-7'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          reprehenderit tenetur, aspernatur dolorum sapiente fugit placeat
          pariatur, deleniti eligendi quod eius voluptatum hic impedit enim,
          labore modi voluptatibus velit necessitatibus atque ut. Accusamus vel
          quaerat maxime iste. Facilis, architecto distinctio obcaecati quasi
          libero quisquam, aliquid doloremque deserunt maiores, nisi
          necessitatibus!
        </p>
        <div className='experience gap-2 sm:gap-8 w-4/5 m-auto flex px-6 mt-6 leading-4 justify-center'>
          <div className='yrs'>
            <b className='block font-extrabold text-indigo-600 py-1'>01+</b>
            <small className='font-extralight italic'>Years Experience</small>
          </div>
          <div className='projects'>
            <b className='block font-extrabold text-indigo-600 py-1'>15+</b>
            <small className='font-extralight italic'>Completed Project</small>
          </div>
          <div className='companies'>
            <b className='block font-extrabold text-indigo-600 py-1'>01+</b>
            <small className='font-extralight italic'>Companies Worked</small>
          </div>
        </div>
        <div className='resume-btn'>
          <button
            onClick={handleDownload}
            className='bg-indigo-600 my-6 p-2 text-sm rounded-lg text-white'
          >
            Download CV
            <i className='text-xs px-1'>
              <FontAwesomeIcon icon={faCircleArrowDown} />
            </i>
          </button>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
