import {
  faBagShopping,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Education from "./Education";

const MyQualification = () => {
  return (
    <section className='text-center my-8'>
      <h2 className='text-2xl font-semibold font-mono'>Qualification</h2>
      <small>My journey</small>
      <div className='btns flex justify-center gap-4'>
        <button>
          <i className='text-sm px-1'>
            <FontAwesomeIcon icon={faChartColumn} />
          </i>
          Education
        </button>
        <button>
          <i className='text-sm px-1'>
            <FontAwesomeIcon icon={faBagShopping} />
          </i>
          Work
        </button>
      </div>
      <Education />
    </section>
  );
};

export default MyQualification;
