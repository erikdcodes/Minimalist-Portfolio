import styled from "styled-components";
import { colors } from "../styles/styleVariables";

const ProjectNav = ({ projects, currentIndex }) => {
  // console.log("pojectnav index", currentIndex);

  const nextLink = () => {
    if (currentIndex === projects.length - 1) return projects[0].title; // if last, return first project
    return projects[currentIndex + 1].title;
  };

  const previousLink = () => {
    if (currentIndex === 0) return projects[projects.length - 1].title; //if first, return last project
    return projects[currentIndex - 1].title;
  };

  return (
    <Wrapper>
      <div className="previous-container">
        <a href={`/portfolio/${previousLink()?.toLowerCase()}`}>
          <h3>{previousLink()}</h3>
          <span className="link-label">Previous Project</span>
        </a>
      </div>
      <div className="next-container">
        <a href={`/portfolio/${nextLink()?.toLowerCase()}`}>
          <h3>{nextLink()}</h3>
          <span className="link-label">Next Project</span>
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
