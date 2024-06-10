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

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [id, setId] = useState(myServices[0].id); // Set initial description to first service

  const toggleModal = (id) => {
    setIsModalOpen(true);
    setId(id);
  };

  const services = myServices.map((service) => (
    <div
      key={service.id}
      className='bg-gray-800 px-6 py-4 shadow-lg rounded-lg cursor-pointer duration-500 hover:scale-105 hover:shadow-xl transform transition-all'
      onClick={() => toggleModal(service.id)} // Move onClick handler here
    >
      <div>
        <div className='mb-4 text-4xl text-purple-500'>
          <FontAwesomeIcon icon={faCode} />
        </div>
        <h2 className='text-xl font-semibold'>{service.serviceName}</h2>
        {/* <div className='mt-4'>
          <span className='text-purple-500 hover:text-purple-700 underline flex items-center'>
            View More
            <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
          </span>
        </div> */}
      </div>
    </div>
  ));

  return (
    <section id='services' className='container mx-auto my-16 text-center'>
      <Title title='My Services' subTitle='Here is what I can do' />
      <div ref={rightRef} className='grid grid-cols-1 md:grid-cols-12 gap-6'>
        <aside className='col-span-4 space-y-8 py-6 px-6 rounded-lg shadow-lg'>
          {services}
        </aside>
        {isModalOpen && (
          <div className='col-span-8'>
            <div className='modal w-full rounded-lg shadow-lg relative'>
              <div
                className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300'
                onClick={() => setIsModalOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <Modal id={id} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
