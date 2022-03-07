import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const SocialLinks = () => {
  return (
    <Wrapper>
      <div className="socials">
        <a href="#">
          <img src="/icons/github.png" alt="" />
        </a>
        <a href="#">
          <img src="/icons/linkedin.png" alt="" />
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .socials {
    display: flex;
    gap: 16px;
  }
  .socials a {
    color: ${colors.veryLightGrey};
  }
`;

export default SocialLinks;
