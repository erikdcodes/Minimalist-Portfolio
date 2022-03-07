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
        <div className="line"></div>
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
          <a className="button secondary" href={buttonLink}>
            {buttonLabel}
          </a>
        </div>
        <div className="line"></div>
      </div>
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.section`
  display: grid;
  row-gap: 32px;
  column-gap: 0;
  margin-bottom: 96px;

  .line {
    width: 100%;
    border-top: 1px solid ${colors.lightGrey};
    height: 1px;
  }

  .img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .text-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .text {
    padding-block: 32px;

    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
    row-gap: 0;
    .text-container {
      order: ${(props) => (props.isReversedLayout ? "-1" : 0)};
    }
  }
`;
