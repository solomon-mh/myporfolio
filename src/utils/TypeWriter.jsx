/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Typewriter = ({ text, repeatTimes = 1 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (repeatCount < repeatTimes || !completed) {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          if (repeatCount < repeatTimes) {
            setCurrentIndex(0);
            setDisplayText("");
            setRepeatCount((prevCount) => prevCount + 1);
          } else {
            setCompleted(true);
          }
        }
      }, 100); // Adjust the typing speed by changing the delay here (in milliseconds)

      // Clear timeout when the component unmounts or when the text is fully displayed
      return () => clearTimeout(timer);
    }
  }, [text, currentIndex, repeatCount, repeatTimes, completed]);

  return (
    <div>
      <p>{displayText}</p>
    </div>
  );
};

export default Typewriter;
