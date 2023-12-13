import ScrollReveal from "scrollreveal";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import { useEffect, useRef } from "react";

const Services = () => {
  const rightRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(rightRef.current, {
      origin: "right",
      distance: "100px",
      rotate: { y: 90 },
      duration: 2000,
      delay: 300,
      easing: "ease",
      reset: true,
    });
  }, []);

  return (
    <section className='my-16 text-center'>
      <Title title='My Services' subTitle='Here is what I can do' />
      <div
        ref={rightRef}
        className='w-4/5 m-auto grid gap-8 sm:grid-cols-2 py-6 px-12 '
      >
        <div className=' w-54 px-6 py-4 shadow-md shadow-slate-700 cursor-pointer duration-500 hover:scale-105 hover:translate-y-1'>
          <div>
            <div className='mb-2'>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h2>Frontend Developer</h2>
            <div
              onClick={() => alert("Hello")}
              className='mt-4 text-purple-400'
            >
              <button>
                View More
                <span className='px-1'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='border-slate-700 w-54 px-6 py-4 shadow-md shadow-slate-700 cursor-pointer duration-500 hover:scale-105 hover:translate-y-1'>
          <div>
            <div className='mb-2'>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h2>Backend Developer</h2>
            <div
              onClick={() => alert("Hello")}
              className='mt-4 text-purple-400'
            >
              <button>
                View More
                <span className='px-1'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='border-slate-700 w-54 px-6 py-4 shadow-md shadow-slate-700 cursor-pointer duration-500 hover:scale-105 hover:translate-y-1'>
          <div>
            <div className='mb-2'>
              <FontAwesomeIcon icon={faCode} />
            </div>
            <h2>
              Fullstack Web <br /> Developer
            </h2>
            <div
              onClick={() => alert("Hello")}
              className='mt-4 text-purple-400'
            >
              <button>
                View More
                <span className='px-1'>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
