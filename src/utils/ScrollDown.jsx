import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 12px;
  font-weight: 900;
  font-size: small;
`;
const StyledButton = styled.button`
  transition: all;
  transition-duration: 0.5s;
  &:hover {
    color: #8576ff;
  }
`;
const ScrollDown = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <StyledDiv>
      <StyledButton onClick={() => scrollTo("qualification")}>
        <i className='px-1'>
          <FontAwesomeIcon icon={faMouse} />
        </i>
        Scroll Down <span className='text-lg'>&darr;</span>
      </StyledButton>
    </StyledDiv>
  );
};

export default ScrollDown;
