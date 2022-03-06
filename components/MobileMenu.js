import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const MobileMenu = ({ isMenuOpen }) => {
  if (isMenuOpen) {
    return (
      <Wrapper>
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact Me</a>
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default MobileMenu;

const Wrapper = styled.div`
  position: absolute;
  right: 32px;
  top: 96px;
  z-index: 999;
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
  background: ${colors.greyDarkBlue};
  a {
    color: ${colors.veryLightGrey};
  }
`;
