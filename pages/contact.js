import ContactLayout from "../layouts/ContactLayout.js";
import styled from "styled-components";
import { colors } from "../styles/styleVariables.js";

const Contact = () => {
  return (
    <ContactLayout>
      <Wrapper>
        <div className="text-container">
          <h2>Get In Touch</h2>
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
        </div>
        <div className="contact-form-container">
          <h2>Contact Me</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input required type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input required type="text" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="textarea" />
            </div>
            <div className="button-container">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </Wrapper>
    </ContactLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-block: 32px;

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-block: 1px solid ${colors.lightGrey};

    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  .contact-form-container {
    width: 100%;
    & > *:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  .text-container,
  .contact-form-container {
    padding-block: 32px;
  }

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .button-container {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 1140px) {
    /* desktop */
    .text-container,
    .contact-form-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Contact;
