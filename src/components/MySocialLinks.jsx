import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MySocialLinks = () => {
  return (
    <div>
      <aside className='mx-12 flex gap-6 text-indigo-300'>
        <a
          className='hover:scale-110 hover:text-indigo-600 duration-500'
          href='https://www.linkedin.com/in/solomonmuhye'
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className='hover:scale-110 hover:text-indigo-600 duration-500'
          href='#instagram'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          className='hover:scale-110 hover:text-indigo-600 duration-500'
          href='https://github.com/solomon-mh'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </aside>
    </div>
  );
};

export default MySocialLinks;
