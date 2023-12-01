import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { education } from "../data/educationInfo";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  const edu = education.map((ed) => {
    return (
      <div className='px-8 py-3' key={crypto.randomUUID()}>
        <b className='block'>{ed.course}</b>
        <small className='block font-extralight pb-2'>{ed.takenFrom}</small>
        {ed.year && (
          <small className='font-extralight opacity-50'>
            <i className='px-1 text-gray-500'>
              <FontAwesomeIcon icon={faCalendar} />
            </i>
            {ed.year}
          </small>
        )}
      </div>
    );
  });
  return <div className='m-12 grid grid-cols-2'>{edu}</div>;
};

export default Education;
