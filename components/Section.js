import styled from "styled-components";
import { colors } from "../styles/styleVariables.js";

const Section = ({
  imgSrc,
  title,
  text,
  buttonLabel,
  buttonLink,
  imgAlt,
  isReversedLayout = false,
}) => {
  return (
    <Wrapper>
      <img src={imgSrc} alt={imgAlt} />
      <hr />
      <h2>{title}</h2>
      <p>{text}</p>
      <a className="button secondary" href={buttonLink}>
        {buttonLabel}
      </a>
      <hr />
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.section`
  & > * {
    margin-bottom: 32px;
  }

  hr {
    height: 1px;
    background-color: ${colors.lightGrey};
    border: none;
  }
`;
