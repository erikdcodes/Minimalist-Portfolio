import { useEffect } from "react";
import DefaultLayout from "../../layouts/DefaultLayout.js";

const Portfolio = ({ projects }) => {
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <DefaultLayout>
      {projects.projects.map((project) => (
        <>
          <h1>{project.title}</h1>
          <img src={project.images[0]} alt="" />
        </>
      ))}
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

export default Portfolio;
