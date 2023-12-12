import { faLinkedin, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../utils/Title";

const ContactMe = () => {
  return (
    <div id='contact' className='bg-slate-500 text-slate-200 my-12 py-12'>
      <div className='w-3/4 m-auto'>
        <h1 className='text-xl font-bold py-1'>Do you have a new project ?</h1>
        <p className='text-sm'>
          Contact me and get a 50% discount on your new Project
        </p>
        <div>
          <button className='bg-indigo-600 my-8 p-2 text-sm rounded-lg text-white'>
            Contact Me
            <i className='px-2'>
              <FontAwesomeIcon icon={faTwitch} />
            </i>
          </button>
        </div>
      </div>
      <div>
        <div className='w-9/10 m-auto text-center px-12 py-4'>
          <Title title='Contact Me' subTitle='get in touch' />
          <div className='text-left flex gap-2 my-2 cursor-pointer'>
            <div>
              <FontAwesomeIcon icon={faMailBulk} />
            </div>
            <div>
              <p className='leading-3'>Email</p>
              <b className='text-xs'>solomon_muhye_wd@gmail.com</b>
            </div>
          </div>
          <div className='text-left flex gap-2 cursor-pointer'>
            <div>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div>
              <p className='leading-3'>LinkedIn</p>
              <b className='text-xs'>@solomon_muhye</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
