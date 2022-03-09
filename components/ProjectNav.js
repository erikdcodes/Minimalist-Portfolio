import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const ProjectNav = ({ projects }) => {
  return (
    <Wrapper>
      <div className="previous-container">
        <a href="#">
          <h3>Fylo</h3>
          <span>Previous Project</span>
        </a>
      </div>
      <div className="next-container">
        <a href="#">
          <h3>Bookmark</h3>
          <span>Next Project</span>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  border-block: 1px solid ${colors.lightGrey};
  align-items: center;

  .previous-container,
  .next-container {
    padding-block: 32px;

    & a {
      color: ${colors.greyDarkBlue};
      text-decoration: none;
      transition: all 500ms ease-in-out;

      &:hover {
        color: ${colors.cyan};
      }
    }
  }

  .next-container {
    border-left: 1px solid ${colors.lightGrey};
    text-align: right;
  }
`;

export default ProjectNav;
