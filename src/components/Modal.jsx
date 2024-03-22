/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { myServices } from "../data/myService";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ id }) => {
  const indvService = myServices.map((service) => {
    if (service.id === Number(id)) {
      // console.log(service, id);
      return (
        <div key={service.id} className='py-4 mt-6'>
          {/* <h1 className='text-xl text-center md:text-3xl mt-12'></h1> */}
          <ul className='my-4 text-left w-fit m-auto'>
            {service.services.map((service) => (
              <li
                key={crypto.randomUUID()}
                className='my-5 text-xs sm:text-base'
              >
                <i className='text-purple-600  mr-4 py-1 px-1.5 w-6 h-6 border-2 border-green-500 rounded-full'>
                  <FontAwesomeIcon icon={faCheck} />
                </i>
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
