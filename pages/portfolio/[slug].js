import styled from "styled-components";
import DefaultLayout from "../../layouts/DefaultLayout";
import { colors } from "../../styles/styleVariables";
import ProjectNav from "../../components/ProjectNav";
import Head from "next/head";
import data from "../../fake-data/projects.json";
const { projects } = data;
import Image from "next/image";

const Project = ({ project, projects }) => {
  const currentIndex = projects.findIndex(
    (item) => item.title === project.title
  );

  return (
    <DefaultLayout>
      <Head>
        <title>{`${project.title} - Minimalist Portfolio - by Erik De Jesus`}</title>
        <meta
          property="og:title"
          content={`${project.title} - Minimalist Portfolio - by Erik De Jesus`}
          key={project.title}
        />
      </Head>
      <Wrapper>
        <div className="image-container">
          <Image
            height={1000}
            width={2220}
            layout="responsive"
            src={project.heroImage2}
            alt={`${project.title} screenshot`}
          />
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
              <Image height={800} width={1270} key={i + img} src={img} />
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
  const item = projects.filter(
    (p) => p.title.toLowerCase() === params.slug.toLowerCase()
  );

  const project = item[0];

  return {
    props: { project, projects },
  };
}

// nextjs ssg paths
export async function getStaticPaths() {
  return {
    paths: projects.map(
      (project) => `/portfolio/${project.title.toLowerCase()}`
    ),
    fallback: false,
  };
}

//styled components
const Wrapper = styled.div`
  animation: fadeIn 2000ms ease;

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
    .description-container {
      display: block;
      & > * {
        margin-bottom: 32px;
      }
      grid-column: 1/2;
      grid-row: 1/3;
    }
    .section-container {
      margin-top: 64px;
      display: grid;
      grid-column-gap: 32px;
      grid-template-columns: 352px 1fr;
    }
    .background-container,
    .previews-container {
      grid-column: -1;
    }
  }
`;

export default Project;
