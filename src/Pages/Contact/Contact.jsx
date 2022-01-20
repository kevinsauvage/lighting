import Input from "../../Components/input/Input";
import useForm from "../../Hooks/useForm";
import "./Contact.scss";
import Container from "../../Layout/Container/Container";
import Section from "../../Layout/Section/Section";
import Title from "../../Components/Title/Title";

const Contact = () => {
  const socials = ["Facebook", "Behance", "Dribbble", "LinkedIn"];

  const initialState = { name: "", email: "", comment: "" };

  const submitCallback = async (e) => {
    console.log(formData);
  };

  const { formData, handleInputChange, handleSubmit } = useForm(initialState, submitCallback);

  return (
    <div className="Contact">
      <Container className={"Contact__container"}>
        <Title className="Contact__title">KILLING OFF THE ORDINARY</Title>
        <p className="Contact__email">INFO@LIGHTNING.COM</p>
        <Section className="Contact__info">
          <ul className="Contact__info-socials">
            <p className="Contact__info-title">Socials</p>
            {socials.map((item, i) => (
              <li key={i} className="Contact__info-item">
                {item}
              </li>
            ))}
          </ul>
          <div className="Contact__info-location">
            <p className="Contact__info-title">Location</p>
            <p className="Contact__info-item">Minnesota, Albertville, 1037 Black Stallion Road</p>
          </div>
        </Section>
        <div className="Contact__form">
          <h2 className="Contact__form-title">Keen to work with us?</h2>
          <div className="Contact__form-wrapper">
            <form action="submit" onSubmit={handleSubmit}>
              <Input
                label="Enter you name here"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formData.name}
              />
              <Input
                label="Enter your email here"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={formData.email}
              />
              <Input
                label="Enter you comments, details here"
                type="text"
                name="comment"
                onChange={handleInputChange}
                value={formData.comment}
              />
            </form>
            <button type="submit" onClick={handleSubmit} className="Contact__form-btn">
              Send
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
