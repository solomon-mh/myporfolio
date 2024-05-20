/* eslint-disable react/prop-types */
function CardImage({ projImg }) {
  return (
    <div className='w-5/6 sm:w-full mx-auto rounded-xl overflow-hidden'>
      <img
        src={projImg}
        alt='My Projects image'
        className='w-full h-full object-fit hover:scale-105 duration-200'
      />
    </div>
  );
}

export default CardImage;
