import { faLinkedin, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
            <a
              href='mailto:solomon.muhye.wd@example.com'
              className='bg-indigo-600 my-8 p-2 text-sm rounded-lg text-white'
            >
              Contact Me
              <i className='px-2'>
                <FontAwesomeIcon icon={faTwitch} />
              </i>
            </a>
          </button>
        </div>
      </div>
      <div>
        <div className='w-9/10 m-auto text-center px-12 py-4'>
          <Title title='Contact Me' subTitle='get in touch' />
          <div className='text-left flex gap-2 my-2 cursor-pointer'>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <a href='mailto:solomon_muhye_wd@gmail.com'>
                solomon_muhye_wd@gmail.com
              </a>
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
