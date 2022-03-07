import { useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout.js";
import Section from "../../components/Section.js";
import styled from "styled-components";

const Portfolio = ({ projects }) => {
  useEffect(() => {
    console.log(projects);
  }, [projects]);

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
              buttonLink={`/portfolio/${project.title}`}
              isReversedLayout={i % 2 == 1}
            />
          </div>
        ))}
      </Wrapper>
    </DefaultLayout>
  );
};

export async function getStaticProps({}) {
  const res = await fetch("http://localhost:3000/api/hello");
  const projects = await res.json();

  return {
    props: { projects },
  };
}

const Wrapper = styled.div``;

export default Portfolio;
