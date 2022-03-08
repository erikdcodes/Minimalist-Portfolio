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
  console.info(project);
  return (
    <DefaultLayout>
      <Wrapper>
        <div className="image-container">
          <img src={project.heroImage2} alt={`${project.title} screenshot`} />
        </div>
        <section>
          <section className="description-container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="tags-container">
              {project.tags.map((tag, i) => {
                if (i === project.tags.length - 1) {
                  return <span key={tag + i}>{tag}</span>;
                } else return <span key={tag + i}>{`${tag} / `}</span>;
              })}
            </div>
          </section>
          <section className="background-container">
            <h2>Project Background</h2>
            <p>{project.background}</p>
            <div className="previews-container">
              <h3>Static Previews</h3>
              {project.images.map((img, i) => (
                <img key={i + img} src={img} />
              ))}
            </div>
          </section>
        </section>
      </Wrapper>
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
