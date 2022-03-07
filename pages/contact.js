import ContactLayout from "../layouts/ContactLayout.js";
import styled from "styled-components";
import Line from "../components/Line.js";

const Contact = () => {
  return (
    <ContactLayout>
      <Wrapper>
        <div className="text-container">
          <Line />
          <div className="text">
            <h1>Get In Touch</h1>
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
          </div>
          <Line />
        </div>
      </Wrapper>
    </ContactLayout>
  );
};

const Wrapper = styled.div`
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export default Contact;
