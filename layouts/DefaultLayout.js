import { useState } from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import { colors } from "../styles/styleVariables";

const DefaultLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  return (
    <Wrapper>
      <MobileMenu isMenuOpen={isMenuOpen} />
      <div className="container">
        <header>
          <div className="logo-container">
            <img src="images/logo.svg" alt="" />
          </div>
          <div onClick={handleClickMenu} className="hamburger-container">
            {isMenuOpen ? (
              <img src="icons/close.svg" alt="" />
            ) : (
              <img src="icons/hamburger.svg" alt="" />
            )}
          </div>
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <div className="logo">
          <img src="/images/logo-light.svg" alt="logo" />
        </div>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact Me</a>
        </div>
        <div className="socials">
          <a href="https://github.com/erikdcodes">G</a>
          <a href="https://github.com/erikdcodes">L</a>
        </div>
      </footer>
    </Wrapper>
  );
};

export default DefaultLayout;

const Wrapper = styled.div`
  position: relative;

  .container {
    margin-inline: auto;
    width: 100%;
    padding-inline: max(32px, calc((100% - 1440px) / 2));
  }

  header {
    padding-block: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger-container {
    cursor: pointer;
  }

  footer {
    background: ${colors.greyDarkBlue};
    min-height: 350px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .links {
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
    gap: 32px;
  }

  .links a,
  .socials a {
    color: ${colors.veryLightGrey};
  }
`;
