/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myServices } from "../data/myService";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ id }) => {
  const indvService = myServices.find((service) => service.id === Number(id));

  if (!indvService) {
    return null; // Handle case where id does not match any service
  }

  return (
    <div className='py-4 mt-6 z-50'>
      <ul className='my-4 text-left w-fit m-auto'>
        {indvService.services.map((service, index) => (
          <li
            key={index}
            className='my-3 text-xs sm:text-base flex items-center'
          >
            <span className='rounded-full bg-green-400 text-white flex items-center justify-center w-6 h-6 mr-4'>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
