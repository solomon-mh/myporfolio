import { useState, useEffect } from "react";
import {
  faBagShopping,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import Education from "./Education";

const MyQualification = () => {
  const [animateSection, setAnimateSection] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateSection("");
    }, 1000);
    return () => clearTimeout(timeout);
  }, [animateSection]);
  return (
    <section id='qualification' className='sm:w-4/5 m-auto text-center'>
      <Title title='Qualification' subTitle='My journey' />
      <div className='btns flex justify-center gap-8'>
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
