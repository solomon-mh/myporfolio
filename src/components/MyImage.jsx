import { faImage } from "@fortawesome/free-solid-svg-icons";
import "../styles/component-stlyes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MyImage = () => {
  return (
    <div>
      <div className='img__container w-fit m-auto my-12 overflow-hidden p-12 bg-indigo-500'>
        {/* <img src={myImage} alt='akashi' /> */}
        <b className='text-9xl relative top-8'>
          <FontAwesomeIcon icon={faImage} />
        </b>
      </div>
    </div>
  );
};

export default MyImage;
