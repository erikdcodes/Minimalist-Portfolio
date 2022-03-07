import styled from "styled-components";
import { useRouter } from "next/router";
import DefaultLayout from "../../layouts/DefaultLayout";

// layout
// hero image
// section component
// project background title
// project background text
// static previews
// links
// call to action

const Project = (projects) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <DefaultLayout>
      <h1>{slug}</h1>
    </DefaultLayout>
  );
};

export default Project;

const getProjects = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const projects = await res.json();
  return projects;
};

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: { projects },
  };
}

export async function getStaticPaths() {
  const projects = await getProjects();

  return {
    paths: projects.projects.map(
      (project) => `/portfolio/${project.title.toLowerCase()}`
    ),
    fallback: true,
  };
}
