import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const Button = () => {
  return (
    <Wrapper>
      <button>asdf</button>
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.div`
  button {
    background: ${colors.darkBlue};
  }
`;
