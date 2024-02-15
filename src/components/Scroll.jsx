import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const ScrollRevealComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const config = {
      // Your ScrollReveal configuration
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      easing: "ease",
      reset: true,
    };

    // Initialize ScrollReveal
    ScrollReveal().reveal(elementRef.current, config);
  }, []);

  return (
    <div ref={elementRef}>
      {/* Content you want to reveal */}
      <h1>ScrollReveal Example</h1>
      <p>This content will be revealed on scroll.</p>
    </div>
  );
};

export default ScrollRevealComponent;
