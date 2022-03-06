//imports
import DefaultLayout from "../layouts/DefaultLayout";
import styled from "styled-components";
import Section from "../components/Section";

// component
const Home = () => (
  <DefaultLayout>
    <Wrapper>
      <section className="hero-container">
        <img src="/images/image-homepage-hero@2x.jpg" alt="image of computer" />
        <div className="title-container">
          <h2>Hi, I'm Erik De Jesus and I love building beautiful wesites</h2>
        </div>
        <button>About Me</button>
      </section>
      <Section
        imgSrc="/images/myphoto1.jpg"
        title="About Me"
        imgAlt="profile photo"
        text="I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."
        buttonLink="#"
        buttonLabel="Go to portfolio"
        isReversedLayout={false}
      />
      <section className="call-to-action">
        <h2>Interested in doing a project together?</h2>
        <a className="button secondary" href="#">
          Contact Me
        </a>
      </section>
    </Wrapper>
  </DefaultLayout>
);

export default Home;

const Wrapper = styled.section`
  .hero-container {
    & > *:not(:last-child) {
      margin-bottom: 32px;
    }

    margin-bottom: 96px;
  }
  .hero-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .call-to-action {
    text-align: center;
    padding-block: 96px;
    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;
