import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <section className='mx-12 text-center py-8'>
      <b className='block text-2xl'>About Me</b>
      <small className='inline-block pb-3'>My Introduction</small>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        reprehenderit tenetur, aspernatur dolorum sapiente fugit placeat
        pariatur, deleniti eligendi quod eius voluptatum hic impedit enim,
        labore modi voluptatibus velit necessitatibus atque ut. Accusamus vel
        quaerat maxime iste. Facilis, architecto distinctio obcaecati quasi
        libero quisquam, aliquid doloremque deserunt maiores, nisi
        necessitatibus!
      </p>
      <div className='experience gap-0.5 sm:gap-7 w-4/5 m-auto flex px-6 mt-6 leading-4 justify-center'>
        <div className='yrs'>
          <b className='block font-extrabold text-indigo-600 py-1'>01+</b>
          <small className='font-extralight italic'>Years Experience</small>
        </div>
        <div className='projects'>
          <b className='block font-extrabold text-indigo-600 py-1'>15+</b>
          <small className='font-extralight italic'>Completed Project</small>
        </div>{" "}
        <div className='companies'>
          <b className='block font-extrabold text-indigo-600 py-1'>01+</b>
          <small className='font-extralight italic'>Companies Worked</small>
        </div>
      </div>
      <div className='resume-btn'>
        <button className='bg-indigo-600 my-6 p-2 text-sm rounded-lg text-white'>
          Download Resume
          <i className='text-xs px-1'>
            <FontAwesomeIcon icon={faDownload} />
          </i>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
