import Container from "../../Layout/Container/Container";
import Section from "../../Layout/Section/Section";
import "./Footer.scss";

const Footer = () => {
  const socials = ["Facebook", "Behance", "Dribbble", "LinkedIn"];

  return (
    <Section className="Footer">
      <Container className="Footer__container">
        <p className="Footer__title">CONTACTS</p>
        <div className="Footer__main">
          <ul className="Footer__list">
            <p className="Footer__subtitle">Socials</p>
            {socials.map((item, i) => (
              <li key={i} className="Footer__list-item">
                {item}
              </li>
            ))}
          </ul>
          <div>
            <p className="Footer__subtitle">Location</p>
            <p className="Footer__location">Minnesota, Albertville, 1037 Black Stallion Road</p>
          </div>
          <div>
            <p className="Footer__subtitle">Work with us</p>
            <p className="Footer__email">info@ligthning.com</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
