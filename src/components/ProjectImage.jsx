import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
/* eslint-disable react/prop-types */
function CardImage({ projImg }) {
  const leftRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(leftRef.current, {
      origin: "left",
      distance: "100px",
      rotate: { y: 180 },
      duration: 2000,
      delay: 300,
      easing: "ease",
      reset: true,
    });
  }, []);
  return (
    <div ref={leftRef} className='rounded-xl overflow-hidden'>
      <img
        src={projImg}
        alt='My Projects image'
        className='w-full h-full object-fit hover:scale-105 duration-200'
      />
    </div>
  );
}

export default CardImage;
