import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "./MyImage";
import Typewriter from "../utils/TypeWriter";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { TeckStack } from "../components";

const Hero = () => {
  const topRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(topRef.current, {
      origin: "top",
      distance: "250px",
      duration: 2300,
      delay: 350,
      easing: "ease",
      reset: true,
    });
  }, []);
  const textToShow =
    "Passionate Fullstack developer based in Ethiopia, dedicated to providing quality work in a timely manner.";

  return (
    <div className='pt-20'>
      <article
        ref={topRef}
        className='flex gap-4 sm:gap-16 flex-col-reverse md:flex-row justify-between items-center w-4/5 mr-12 mx-auto'
        id='home'
      >
        <section className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-3xl -mb-10 sm:mb-0 md:hidden font-extrabold'>
            Hi, I am
            <span className='text-brightRed mx-1'>
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
          <p className='font-mono font-extrabold text-lg inline-block text-lime-500 my-4'>
            FullStack Developer
          </p>
          <div className='mb-8 hidden sm:block'>
            <Typewriter text={textToShow} />
          </div>
          <div className='flex justify-center md:justify-start gap-4'>
            <a
              href='https://www.linkedin.com/in/solomonmuhye'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md  bg-[linear-gradient(110deg,#3b6bdc,45%,#7e99d8,65%,#3b6bdc)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                <i className='pr-2'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
                LinkedIn
              </button>
            </a>
            <a
              href='https://github.com/SolomonMuhyeY'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#a0b7d8,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
                <i className='pr-2'>
                  <FontAwesomeIcon icon={faGithub} />
                </i>
                GitHub
              </button>
            </a>
          </div>
        </section>
        <section className='md:w-1/2 md:mb-0'>
          <MyImage />
        </section>
      </article>
      <div className='md:w-4/5 flex flex-col my-10 mr-12 mx-auto items-center sm:gap-6 sm:flex-row sm:my-1'>
        <p className='text-lg font-semibold'>My Tech Stack</p>
        <TeckStack />
      </div>
    </div>
  );
};

export default Hero;
