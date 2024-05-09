import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "./MyImage";
import Typewriter from "../utils/TypeWriter";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import TechStack from "./TechStack";

const Hero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(leftRef.current, {
      origin: "left",
      distance: "50px",
      duration: 1600,
      delay: 100,
      easing: "ease",
      reset: false,
    });

    ScrollReveal().reveal(rightRef.current, {
      origin: "right",
      distance: "150px",
      duration: 2000,
      delay: 500,
      easing: "ease",
      reset: true,
    });
  }, []);
  const textToShow =
    "Passionate Fullstack web developer dedicated to providing quality work in a timely manner.";

  return (
    <div className='py-16 md:py-24'>
      <article
        className='flex flex-col-reverse md:flex-row justify-between items-center w-4/5 mx-auto'
        id='home'
      >
        <section ref={leftRef} className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-3xl  md:hidden font-extrabold'>
            Hi, I am
            <span className='text-brightRed'>
              Solomon <span className='block'>Muhye</span>
            </span>
          </h1>
          <h1 className='hidden text-4xl md:block font-extrabold'>
            Hi,
            <br />
            <span>I am </span>
            <span className='text-brightRed'>
              Solomon <span className='block'>Muhye</span>
            </span>
          </h1>
          <small className='font-mono inline-block text-orange-400 mb-4'>
            Fullstack Developer
          </small>
          <div className='mb-8'>
            <Typewriter text={textToShow} />
          </div>
          <div className='flex justify-center md:justify-start gap-4'>
            <a
              href='https://www.linkedin.com/in/solomonmuhye'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-600 hover:bg-blue-700 px-4 py-3 text-sm rounded-lg text-white flex items-center'
            >
              <i className='pr-2'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
              LinkedIn
            </a>
            <a
              href='https://github.com/SolomonMuhyeY'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-gray-900 px-4 py-3 text-sm rounded-lg text-white flex items-center'
            >
              <i className='pr-2'>
                <FontAwesomeIcon icon={faGithub} />
              </i>
              GitHub
            </a>
          </div>
        </section>
        <section ref={rightRef} className='md:w-1/2 mb-8 md:mb-0'>
          <MyImage />
        </section>
      </article>
      <div className='flex my-8 sm:my-1 justify-center items-center gap-6'>
        <p className='text-lg font-semibold'>My Tech Stack</p>
        <TechStack />
      </div>
    </div>
  );
};

export default Hero;
