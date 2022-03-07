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
    <Wrapper isReversedLayout={isReversedLayout}>
      <div className="img-container">
        <img src={imgSrc} alt={imgAlt} loading="lazy" />
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
  margin-bottom: 96px;
  height: 100%;

  @media (min-width: 760px) {
    height: 100%;
    display: flex;
    flex-direction: ${(props) =>
      props.isReversedLayout ? "row-reverse" : "row"};
    gap: 96px;

    .img-container {
      flex: 1 1 50%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .text-container {
      flex: 1 0 50%;
      height: 100%;
    }
  }

  .img-container {
    margin-bottom: 32px;
    height: 100%;
  }

  .text-container > * {
    margin-bottom: 64px;
  }

  hr {
    height: 1px;
    background-color: ${colors.lightGrey};
    border: none;
  }
`;
