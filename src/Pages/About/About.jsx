import Footer from "../../Components/Footer/Footer";
import Container from "../../Layout/Container/Container";
import "./About.scss";
import Persona1 from "../../Images/Persona1.png";
import Persona2 from "../../Images/Persona2.png";
import Persona3 from "../../Images/Persona3.png";
import Persona4 from "../../Images/Persona4.png";
import Section from "../../Layout/Section/Section";
const About = () => {
  return (
    <div className="About">
      <Container className="About__container">
        <div className="About__banner">
          <h1 className="About__title">Hey, we're Ligthining</h1>
          <p className="About__subtitle">Collective of professional sweethearts creating love for money</p>
        </div>
        <h2 className="About__desc">
          Instead of designing and redesigning we now have recreated our agency into a collective embracing
          business design — rethinking companies fundamentally by our brave and conscious approach spiced with
          cross-dimensional creative expertise and endless talent capacity
        </h2>
        <div className="About__wrapper">
          <p className="About__textSmall">
            <span>1</span>We contribute to this world by making good companies gutsy enough and rethink
            businesses by voicing out their honest stories, positively shifting life patterns of their clients
          </p>
          <p className="About__textSmall">
            <span>2</span>We want to live in a world of people enjoying their ability to communicate and
            understand each other
          </p>
        </div>
        <Section className="About__team">
          <img src={Persona1} alt="team worker" />
          <img src={Persona2} alt="team worker" />
          <img src={Persona3} alt="team worker" />
          <img src={Persona4} alt="team worker" />
        </Section>
      </Container>
      <Section className="About__slice">
        <Container>
          <p className="About__textBig">
            <span>3</span>We’ve re-invented the agency & now we’re the craft — a team of professionals united
            by our passion to projects challenging the status quo
          </p>
        </Container>
      </Section>
      <Footer />
    </div>
  );
};

export default About;
