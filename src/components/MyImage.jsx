// import myImage from "../assets/akashi.jpg";
import "../styles/component-stlyes.css";
const MyImage = () => {
  return (
    <div>
      <div className='img-container overflow-hidden p-12 bg-indigo-500'>
        {/* <img src={myImage} alt='akashi' /> */}
        <b className='text-9xl relative top-8'>💂🏿‍♂️</b>
      </div>
    </div>
  );
};

export default MyImage;
