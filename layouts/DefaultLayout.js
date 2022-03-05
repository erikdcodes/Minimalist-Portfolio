import styled from "styled-components";

const DefaultLayout = ({ children }) => {
  return (
    <Wrapper>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </Wrapper>
  );
};

export default DefaultLayout;

const Wrapper = styled.div`
  outline: 2px solid green;
`;
