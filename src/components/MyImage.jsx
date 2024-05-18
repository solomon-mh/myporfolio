import myImg from "../assets/myPicture/solomon.png";
import "../styles/component-stlyes.css";
const MyImage = () => {
  return (
    <div className='img__container w-64 h-64 mx-auto overflow-hidden'>
      <img
        className='my__image transition duration-300 hover:scale-105'
        src={myImg}
        alt='my image'
      />
    </div>
  );
};

export default MyImage;
