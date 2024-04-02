import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { education } from "../data/educationInfo";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Education = () => {
  const initialVissibleCards = 2;
  const [showAll, setShowAll] = useState(false);
  const [visibleCards, setVisibleCards] = useState(initialVissibleCards);
  const handleShowMore = () => {
    if (showAll) {
      setVisibleCards(initialVissibleCards);
    } else {
      setVisibleCards(education.length);
    }
    setShowAll((prev) => !prev);
  };

  const rightRef = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(rightRef.current, {
      origin: "right",
      distance: "100px",
      duration: 2000,
      delay: 100,
      easing: "ease",
      reset: false,
    });
  }, []);
  const edu = education.slice(0, visibleCards).map((ed) => {
    return (
      <div
        className='relative mx-12 m-6 text-justify px-12 py-5 border-2'
        key={crypto.randomUUID()}
      >
        <b className='block'>{ed.course}</b>
        <small className='block font-extralight pb-2'>{ed.institution}</small>
        <small className='font-extralight opacity-50'>
          <i className='px-1 text-gray-500'>
            <FontAwesomeIcon icon={faCalendar} />
          </i>
          {ed.year}
        </small>
      </div>
    );
  });
  return (
    <div>
      <div
        ref={rightRef}
        className='education__timeline md:w-3/5 md:mx-auto m-12'
      >
        {edu}
      </div>
      <div className='text-center'>
        <span className='mx-2 bg-purple-100 px-2 py-1.5 rounded-lg text-purple-800'>
          {showAll ? "-" : "+"}
        </span>
        <button
          onClick={handleShowMore}
          className='show-more-btn my-2 p-1.5 text-sm font-semibold rounded-lg bg-purple-100 text-purple-800'
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Education;
