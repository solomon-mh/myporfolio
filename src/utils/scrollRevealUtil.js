import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

const revealConfig = {
  origin: "bottom", // Change the origin of the reveal ('bottom', 'left', 'right', 'top')
  distance: "20px", // Distance in pixels to start the reveal animation
  duration: 1000, // Duration of the animation in milliseconds
  delay: 0, // Delay in milliseconds before the animation starts
  easing: "cubic-bezier(0.5, 0, 0, 1)", // Easing function for the animation
  opacity: 0, // Starting opacity
  scale: 1, // Starting scale
  rotate: { x: 0, y: 0, z: 0 }, // Starting rotation values
  interval: 0, // Interval between sequential element animations
};

const applyScrollReveal = () => {
  sr.reveal(".your-element", revealConfig);
};

export default applyScrollReveal;
