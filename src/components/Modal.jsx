/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myServices } from "../data/myService";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ id }) => {
  const indvService = myServices.map((service) => {
    if (service.id === Number(id)) {
      return (
        <div key={service.id} className='py-4 mt-6'>
          <ul className='my-4 text-left w-fit m-auto'>
            {service.services.map((service) => (
              <li
                key={service.id}
                className='my-5 text-xs sm:text-base text-left'
              >
                <span className='text-purple-600 mr-4 py-1 px-1'>
                  <span className='fa-layers fa-fw'>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className='text-green-500'
                      size='lg'
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className='text-white'
                      size='sm'
                      transform='shrink-6'
                    />
                  </span>
                </span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  });
  return <div>{indvService}</div>;
};

export default Modal;
