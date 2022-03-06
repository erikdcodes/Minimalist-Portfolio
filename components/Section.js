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
      <div className="img-container">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="text-container">
        <hr />
        <h2>{title}</h2>
        <p>{text}</p>
        <a className="button secondary" href={buttonLink}>
          {buttonLabel}
        </a>
        <hr />
      </div>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.section`
  .img-container {
    margin-bottom: 32px;
  }

  .text-container > * {
    margin-bottom: 32px;
  }

  hr {
    height: 1px;
    background-color: ${colors.lightGrey};
    border: none;
  }
`;
