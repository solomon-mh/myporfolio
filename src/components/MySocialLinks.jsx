import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MySocialLinks = () => {
  return (
    <div>
      <aside className='mx-12 flex flex-col text-indigo-300'>
        <a href='#linkedin'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href='#instagram'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href='#github'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </aside>
    </div>
  );
};

export default MySocialLinks;
