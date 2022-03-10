import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const MobileMenu = ({ isMenuOpen, links }) => {
  if (isMenuOpen) {
    return (
      <Wrapper>
        {links.map((link, i) => (
          <a key={link + i} href={link.url}>
            {link.anchorText}
          </a>
        ))}
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
  animation: fadeIn 250ms linear;
`;
