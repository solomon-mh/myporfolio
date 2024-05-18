import ScrollReveal from "scrollreveal";
import {
  faArrowRight,
  faCode,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";
import { useEffect, useRef, useState } from "react";
import { myServices } from "../data/myService";
import Modal from "../utils/Modal";
const Services = () => {
  const rightRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(rightRef.current, {
      origin: "right",
      distance: "100px",
      rotate: { y: 90 },
      duration: 1500,
      delay: 300,
      easing: "ease",
      reset: true,
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState(1);
  const toggleModal = (e) => {
    setIsModalOpen((prev) => !prev);
    if (e.target.name === "view more") {
      setId(e.target.id);
    }
  };
  const services = myServices.map((service) => {
    return (
      <div
        key={service.id}
        className='w-54 px-6 py-4 shadow-md shadow-slate-500 cursor-pointer duration-500 hover:scale-105 hover:translate-y-1'
      >
        <div>
          <div className='mb-2'>
            <FontAwesomeIcon icon={faCode} />
          </div>
          <h2>{service.serviceName}</h2>
          <div onClick={(e) => toggleModal(e)} className='mt-4 text-purple-400'>
            <button name='view more' id={service.id}>
              View More
              <span className='px-1'>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id='services' className='my-16 text-center'>
      <Title title='My Services' subTitle='Here is what I can do' />
      <div ref={rightRef}>
        <article className='lg:gap-12 m-auto  grid gap-8 sm:grid-cols-2 py-6 px-12 '>
          {services}
        </article>
        <div className='modals'>
          {/* Modal */}
          {isModalOpen && (
            <div className='modal__overlay'>
              <div className='modal w-3/5 sm:w-fit sm:px-12'>
                <div
                  className='absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer duration-500 hover:text-red-800 hover:border-red-300'
                  onClick={(e) => toggleModal(e)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <Modal services={services} id={id} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
