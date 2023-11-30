import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <h1 className='text-4xl bg-red-500'>
        <FontAwesomeIcon icon={faFacebookF} />
      </h1>
      <h1>
        <FontAwesomeIcon icon={faInstagram} />
      </h1>{" "}
      <h1>
        <FontAwesomeIcon icon={faTwitter} />
      </h1>
    </>
  );
}

export default App;
