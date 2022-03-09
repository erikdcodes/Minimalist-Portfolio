import { useState } from "react";
import styled from "styled-components";
import MobileMenu from "../components/MobileMenu";
import SocialLinks from "../components/SocialLinks";
import { colors } from "../styles/styleVariables";
import Head from "next/head";

const DefaultLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  const links = [
    { anchorText: "Home", url: "/" },
    { anchorText: "Portfolio", url: "/portfolio" },
    { anchorText: "Contact Me", url: "/contact" },
  ];

  return (
    <Wrapper>
      <Head>
        <title>Minimalist Portfolio - by Erik De Jesus</title>
        <meta
          property="og:title"
          content="Minimalist Portfolio - by Erik De Jesus"
          key="title"
        />
      </Head>
      <MobileMenu isMenuOpen={isMenuOpen} links={links} />
      <div className="container">
        <header>
          <div className="logo-container">
            <a href="/">
              <img src="/images/logo.svg" alt="" />
            </a>
          </div>
          <nav className="desktop-nav">
            <ul>
              {links.map((link, i) => (
                <li key={link.url + i}>
                  <a href={link.url}> {link.anchorText} </a>
                </li>
              ))}
            </ul>
          </nav>
          <div onClick={handleClickMenu} className="hamburger-container">
            {isMenuOpen ? (
              <img src="/icons/close.svg" alt="" />
            ) : (
              <img src="/icons/hamburger.svg" alt="" />
            )}
          </div>
        </header>
        <main>{children}</main>
        <section className="call-to-action">
          <div>
            <h2>Interested in doing a project together?</h2>
          </div>
          <div>
            <a className="button secondary" href="contact">
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
          {links.map((link, i) => (
            <a key={link.anchorText + 1} href={link.url}>
              {link.anchorText}
            </a>
          ))}
        </div>

        <SocialLinks />
      </footer>
    </Wrapper>
  );
};

export default DefaultLayout;

const Wrapper = styled.div`
  position: relative;

  .container {
    min-height: 50vh;

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

  .links a {
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
