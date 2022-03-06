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
          <nav className="desktop-nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact Me</a>
              </li>
            </ul>
          </nav>
          <div onClick={handleClickMenu} className="hamburger-container">
            {isMenuOpen ? (
              <img src="icons/close.svg" alt="" />
            ) : (
              <img src="icons/hamburger.svg" alt="" />
            )}
          </div>
        </header>
        <main>{children}</main>
        <section className="call-to-action">
          <div>
            <h2>Interested in doing a project together?</h2>
          </div>
          <div>
            <a className="button secondary" href="#">
              Contact Me
            </a>
          </div>
        </section>
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
          <a href="#">
            <img src="/icons/github.png" alt="" />
          </a>
          <a href="#">
            <img src="/icons/linkedin.png" alt="" />
          </a>
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

  .call-to-action {
    text-align: center;
    padding-block: 96px;
    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  .desktop-nav {
    font-size: 14px;
    text-transform: uppercase;
    & a {
      text-decoration: none;
      color: ${colors.greyDarkBlue};
      transition: all 150ms ease-in-out;
    }
    & a:hover {
      color: ${colors.cyan};
    }
    ul {
      list-style: none;
      display: flex;
      gap: 32px;
    }
  }

  footer {
    background: ${colors.greyDarkBlue};
    min-height: 350px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-inline: 32px;
  }
  .links {
    display: flex;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;
    gap: 32px;
  }

  .socials {
    display: flex;
    gap: 16px;
  }

  .links a,
  .socials a {
    color: ${colors.veryLightGrey};
  }

  @media (min-width: 768px) {
    .hamburger-container {
      display: none;
    }
    footer {
      flex-direction: row;
      justify-content: space-between;
      min-height: 0;
      padding-block: 32px;
    }
    .logo {
      flex: 0 1 15%;
    }
    .links {
      flex-direction: row;
      flex: 1 1 75%;
    }
    .call-to-action {
      display: flex;
      text-align: left;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (max-width: 767px) {
    .desktop-nav {
      display: none;
    }
  }
`;
