import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <article className='mx-12'>
      <h1 className='text-3xl font-extrabold'>
        Hi, I am Solomon <span className='block'>Muhye</span>
      </h1>
      <b className='text-sm font-light text-indigo-400'>Frontend Developer</b>
      <p>
        Passionate web developer dedicated to provide a quality work in a timely
        manner.
      </p>
      <button className='bg-indigo-600 my-8 p-2 text-sm rounded-lg text-white'>
        Contact Me
        <i className='px-2'>
          <FontAwesomeIcon icon={faFileText} />
        </i>
      </button>
    </article>
  );
};

export default Hero;
