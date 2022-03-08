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

const Project = (props) => {
  // console.log(props);
  const { project } = props;

  return (
    <DefaultLayout>
      <h1>{project.title}</h1>
    </DefaultLayout>
  );
};

const Wrapper = styled.div``;

export default Project;

export async function getStaticProps({ params }) {
  const res = await getProjects();
  const data = res.projects.filter(
    (p) => p.title.toLowerCase() === params.slug.toLowerCase()
  );

  const project = data[0];

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
    fallback: false,
  };
}
