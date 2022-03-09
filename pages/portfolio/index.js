import DefaultLayout from "../../layouts/DefaultLayout.js";
import Section from "../../components/Section.js";
import styled from "styled-components";
import getProjects from "../../lib/getProjects.js";

const Portfolio = ({ projects }) => {
  return (
    <DefaultLayout>
      <Wrapper>
        {projects.projects.map((project, i) => (
          <div key={project.title + i}>
            <Section
              title={project.title}
              text={project.description}
              imgSrc={project.heroImage}
              imgAlt={`${project.title} + preview photo`}
              buttonLabel="View Project"
              buttonLink={`/portfolio/${project.title.toLowerCase()}`}
              isReversedLayout={i % 2 == 1}
            />
          </div>
        ))}
      </Wrapper>
    </DefaultLayout>
  );
};

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}

const Wrapper = styled.div``;

export default Portfolio;
