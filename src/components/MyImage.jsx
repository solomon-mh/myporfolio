import myImg from "../assets/myPicture/man.jpg";
import "../styles/component-stlyes.css";
const MyImage = () => {
  return (
    <div className='img__container w-56 h-56 mx-auto overflow-hidden'>
      <img className='w-full h-full' src={myImg} alt='my image' />
    </div>
  );
};

export default MyImage;
