import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "./MyImage";
const Hero = () => {
  return (
    <section id='home'>
      <article className='flex flex-col-reverse text-center sm:text-justify md:grid md:grid-cols-2 justify-around items-center  my-8 sm:my-44'>
        <article className='mx-12 sm:text-left'>
          <h1 className='text-3xl  md:hidden font-extrabold'>
            Hi, I am{" "}
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
