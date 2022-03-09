import styled from "styled-components";
import DefaultLayout from "../../layouts/DefaultLayout";
import getProjects from "../../lib/getProjects";
import { colors } from "../../styles/styleVariables";
import ProjectNav from "../../components/ProjectNav";

const Project = ({ project, projects }) => {
  const currentIndex = projects.findIndex(
    (item) => item.title === project.title
  );

  return (
    <DefaultLayout>
      <Wrapper>
        <div className="image-container">
          <img src={project.heroImage2} alt={`${project.title} screenshot`} />
        </div>
        <section className="section-container">
          <section className="description-container">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>
            <div className="tags-container">
              {project.tags.map((tag, i) => {
                if (i === project.tags.length - 1) {
                  return <span key={tag + i}>{tag}</span>;
                } else return <span key={tag + i}>{`${tag} / `}</span>;
              })}
            </div>
            <div className="button-container">
              <a className="button secondary" href="#">
                Visit Website
              </a>
            </div>
          </section>

          <section className="background-container">
            <h2>Project Background</h2>
            <p>{project.background}</p>
          </section>

          <section className="previews-container">
            <h3>Static Previews</h3>
            {project.images.map((img, i) => (
              <img key={i + img} src={img} />
            ))}
          </section>
        </section>
        <ProjectNav projects={projects} currentIndex={currentIndex} />
      </Wrapper>
    </DefaultLayout>
  );
};

// nextjs ssg props
export async function getStaticProps({ params }) {
  const res = await getProjects();
  const projects = res.projects;
  const data = projects.filter(
    (p) => p.title.toLowerCase() === params.slug.toLowerCase()
  );

  const project = data[0];

  return {
    props: { project, projects },
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
  .section-container {
    & > * {
      margin-bottom: 32px;
    }
  }
  .image-container {
    margin-bottom: 32px;
  }
  .previews-container,
  .image-container {
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .description-container {
    border-block: 1px solid ${colors.lightGrey};
    padding-block: 32px;
  }
  .description-container > *,
  .background-container > *,
  .previews-container > * {
    margin-bottom: 32px;
  }
  .tags-container {
    color: ${colors.cyan};
  }

  @media (min-width: 768px) {
    /* tablet */
    .description-container > * {
      margin-bottom: 0;
    }

    .description-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      /* align-items: center; */
      grid-gap: 32px;
      grid-column: 1/-1;
    }

    .project-title {
      /* grid-column: 1; */
    }
    .project-description {
      grid-column: 2/-1;
      grid-row: 1/-1;
    }

    .button {
      grid-column: 1/2;
    }
  }

  @media (min-width: 1140px) {
    /* desktop */
  }
`;

export default Project;
