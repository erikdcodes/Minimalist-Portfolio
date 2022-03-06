//imports
import DefaultLayout from "../layouts/DefaultLayout";
import styled from "styled-components";

// component
const Home = () => (
  <DefaultLayout>
    <Wrapper>
      <div className="hero-container">
        <img src="images/image-homepage-hero.jpg" alt="" />
        <div className="title-container">
          <h2>Hi, I'm Erik De Jesus and I love building beautiful wesites</h2>
        </div>
        <button>About Me</button>
      </div>
    </Wrapper>
  </DefaultLayout>
);

export default Home;

const Wrapper = styled.div`
  .hero-container {
    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }
  .hero-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
