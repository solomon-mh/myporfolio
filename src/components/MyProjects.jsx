import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import sampleImg from "../assets/sample/jibyte-writers.png";

function MyProjects() {
  return (
    <div className='py-12'>
      <Title title='Projects' subTitle='most recent projects' />
      <div className='grid grid-cols-2 md:grid-cols-2 gap-8'>
        <div className='flex h-72 items-center'>
          <img
            src={sampleImg}
            alt='My Projects image'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col justify-center p-6 rounded-lg shadow-md'>
          <p className='text-xl font-medium text-gray-200 mb-2'>Project Type</p>
          <p className='text-gray-600 mb-4'>Project Description</p>
          <p className='text-gray-600 mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ipsa explicabo temporibus repellat quasi praesentium similique ex
            cupiditate adipisci? Eligendi molestiae quis nam! Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Fugiat reiciendis eos
            quidem? Quisquam, quidem. Quisquam, quidem. Quisquam, quidem.
          </p>
          <div className='flex justify-center  space-x-8 my-8'>
            <div className=' group cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
              <FontAwesomeIcon
                icon={faReact}
                className='text-xl text-gray-400 group-hover:text-brightRed transition duration-300 ease-in-out'
              />
              <span>React</span>
            </div>
            <div className=' group cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
              <FontAwesomeIcon
                icon={faReact}
                className='text-xl text-gray-400 group-hover:text-brightRed transition duration-300 ease-in-out'
              />
              <span>React</span>
            </div>
          </div>
          <div className='flex justify-left space-x-4'>
            <a
              target='_blank'
              href='https://www.example.com'
              rel='noreferrer'
              className='flex items-center text-blue-500 hover:text-blue-700'
            >
              <FontAwesomeIcon icon={faGithub} className='mr-2' />
              View Code
            </a>
            <a
              target='_blank'
              href='https://www.example.com'
              rel='noreferrer'
              className='flex items-center text-blue-500 hover:text-blue-700'
            >
              <FontAwesomeIcon className='mr-2' icon={faLink} />
              View Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
