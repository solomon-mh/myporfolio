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
      <div ref={rightRef} className='my-4'>
        <MyImage />
      </div>
      <article ref={leftRef} className='md:w-3/5 m-auto leading-7'>
        <p>
          Hi, I&apos;m Solomon, a dedicated and passionate software engineer,
          web and mobile app developer. I thrive on solving problems and
          creating innovative solutions. With a focus on quality and efficiency,
          I am committed to delivering high-performance software products. My
          goal is to make a meaningful impact through technology and to
          continuously expand my skills to stay at the forefront of the
          industry.
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
