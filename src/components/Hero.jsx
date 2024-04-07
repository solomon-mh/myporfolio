import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "./MyImage";
import Typewriter from "../utils/TypeWriter";
import { handleDownload } from "../utils/cvDownloader";

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
      duration: 1600,
      delay: 100,
      easing: "ease",
      reset: true,
    });
  }, []);
  const textToShow =
    " Passionate Fullstack web developer dedicated to provide quality  work in a timely manner.";

  return (
    <section
      className='flex flex-col-reverse text-center sm:text-justify md:flex-row justify-around items-center my-8 mx-12 sm:my-44'
      id='home'
    >
      <article ref={leftRef} className='mx-16 sm:text-left'>
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
        <small className='font-mono inline-block text-orange-400 py-2'>
          Fullstack Developer
        </small>
        <div>
          <Typewriter text={textToShow} />
        </div>
        <button
          onClick={handleDownload}
          className='bg-indigo-600 my-8 p-2 text-sm rounded-lg text-white'
        >
          Download CV
          <i className='px-2'>
            <FontAwesomeIcon icon={faFileDownload} />
          </i>
        </button>
      </article>
      <article ref={rightRef}>
        <MyImage />
      </article>
    </section>
  );
};

export default Hero;
