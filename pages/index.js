//imports
import DefaultLayout from "../layouts/DefaultLayout";
import styled from "styled-components";
import Section from "../components/Section";
import { colors } from "../styles/styleVariables";
import Image from "next/image";

// component
const Home = () => (
  <DefaultLayout>
    <Wrapper>
      <section className="hero-container">
        <Image
          height={1200}
          width={2200}
          layout="responsive"
          src="/images/image-homepage-hero@2x.jpg"
          alt="image of computer"
        />
        <div className="title-container">
          <h2>
            Hi, I&apos;m Alex Spencer and I love building beautiful wesites
          </h2>
          <button>About Me</button>
        </div>
      </section>
      <Section
        imgSrc="/images/image-homepage-profile.jpg"
        title="About Me"
        imgAlt="profile photo"
        text="I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."
        buttonLink="/portfolio"
        buttonLabel="Go to portfolio"
        isReversedLayout={false}
      />
    </Wrapper>
  </DefaultLayout>
);

export default Home;

const Wrapper = styled.section`
  .hero-container {
    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
    position: relative;
    margin-bottom: 96px;
    animation: fadeIn 2000ms ease;
  }
  .title-container {
    button {
      margin-top: 32px;
    }
  }
  .hero-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .title-container {
      background: ${colors.veryLightGrey};
      position: absolute;
      bottom: 0;
      max-width: 500px;
      padding: 32px 32px 0 0;
    }
  }
`;
