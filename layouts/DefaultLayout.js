import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <div className="container">
        <header>
          <div className="logo-container">
            <img src="images/logo.svg" alt="" />
          </div>
          <div className="hamburger-container">
            <img src="icons/hamburger.svg" alt="" />
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
        <div className="socials">G T L</div>
      </footer>
    </Wrapper>
  );
};

export default DefaultLayout;

const Wrapper = styled.div`
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

  .links a {
    color: ${colors.veryLightGrey};
  }
`;
