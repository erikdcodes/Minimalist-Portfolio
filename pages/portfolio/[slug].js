import styled from "styled-components";
import DefaultLayout from "../../layouts/DefaultLayout";
import getProjects from "../../lib/getProjects";

// layout
// hero image
// section component
// project background title
// project background text
// static previews
// links
// call to action

const Project = ({ project }) => {
  console.log(project);
  const {
    title,
    description,
    background,
    tags,
    technologies,
    images,
    heroImage2,
    url,
  } = project[0];

  return (
    <DefaultLayout>
      <h1>{project.title}</h1>
    </DefaultLayout>
  );
};

const Wrapper = styled.div``;

export default Project;

export async function getStaticProps({ params }) {
  const data = await getProjects();
  const project = data.projects.filter(
    (p) => p.title.toLowerCase() === params.slug.toLowerCase()
  );
  console.log(data);

  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const data = await getProjects();

  return {
    paths: data.projects.map(
      (project) => `/portfolio/${project.title.toLowerCase()}`
    ),
    fallback: true,
  };
}
