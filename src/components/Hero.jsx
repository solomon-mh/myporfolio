import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "./MyImage";
const Hero = () => {
  return (
    <section id='home'>
      <article className='flex flex-col-reverse text-center sm:text-justify sm:grid sm:grid-cols-2 justify-around items-center sm:mt-44 mb-24'>
        <article className='mx-12'>
          <h1 className='text-3xl font-extrabold'>
            Hi, I am{" "}
            <span className='text-lime-600'>
              Solomon <span className='block'>Muhye</span>
            </span>
          </h1>
          <b className='text-sm text-indigo-400 font-light inline-block py-2'>
            Frontend Developer
          </b>
          <p>
            Passionate web developer dedicated to provide a quality work in a
            timely manner.
          </p>
          <button className='bg-indigo-600 my-8 p-2 text-sm rounded-lg text-white'>
            Contact Me
            <i className='px-2'>
              <FontAwesomeIcon icon={faMailBulk} />
            </i>
          </button>
        </article>
        <MyImage />
      </article>
    </section>
  );
};

export default Hero;
