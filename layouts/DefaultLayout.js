import styled from "styled-components";

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <header>
        <div className="logo-container">
          <img src="images/logo.svg" alt="" />
        </div>
        <div className="hamburger-container">
          <img src="icons/hamburger.svg" alt="" />
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </Wrapper>
  );
};

export default DefaultLayout;

const Wrapper = styled.div`
  margin-inline: auto;
  width: 100%;
  padding-inline: max(32px, calc((100% - 1440px) / 2));

  header {
    padding-block: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
