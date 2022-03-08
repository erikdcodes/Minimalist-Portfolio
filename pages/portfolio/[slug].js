import styled from "styled-components";
import DefaultLayout from "../../layouts/DefaultLayout";
import getProjects from "../../lib/getProjects";
import Line from "../../components/Line.js";
import { colors } from "../../styles/styleVariables";

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
            <Line />
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="tags-container">
              {project.tags.map((tag, i) => {
                if (i === project.tags.length - 1) {
                  return <span key={tag + i}>{tag}</span>;
                } else return <span key={tag + i}>{`${tag} / `}</span>;
              })}
            </div>
            <a className="button secondary" href="#">
              Visit Website
            </a>
            <Line />
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

// nextjs ssg props
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

// nextjs ssg paths
export async function getStaticPaths() {
  const data = await getProjects();

  return {
    paths: data.projects.map(
      (project) => `/portfolio/${project.title.toLowerCase()}`
    ),
    fallback: false,
  };
}

//styled components
const Wrapper = styled.div`
  .image-container {
    margin-bottom: 32px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .description-container > *,
  .background-container > *,
  .previews-container > * {
    margin-bottom: 32px;
  }
  .tags-container {
    color: ${colors.cyan};
  }
`;

export default Project;
