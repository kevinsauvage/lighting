import "./ProjectShow.scss";
import ProjectShowImg from "../../Images/projectShow.png";
import Container from "../../Layout/Container/Container";
import project2Img from "../../Images/project2.webp";
import project1Img from "../../Images/project1.webp";
import { useEffect } from "react";
import Section from "../../Layout/Section/Section";

const ProjectShow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ProjectShow">
      <Section className="ProjectShow__details">
        <Container>
          <h1 className="ProjectShow__title">Gavvity</h1>
          <p className="ProjectShow__type">
            Branding, Typography, UX Wire-framing, UI Designs, <span>2020</span>
          </p>
          <p className="ProjectShow__subtitle">
            Gravvity is a chat app where you can combine and filter your social feeds, designed to empower
          </p>
          <p className="ProjectShow__description">
            Social media has been designed to manipulate people for their data and attention which is causing
            harm to people’s health, privacy, productivity, and relationships. Our mission with Gravvity was
            to fix social media, by giving 3.8 billion users the ability to enjoy the benefits of being
            connected without being exploited
          </p>
        </Container>
      </Section>
      <img src={ProjectShowImg} alt="working process" className="ProjectShow__bannerImg" />
      <Container className="ProjectShow__imgs">
        <img src={project1Img} alt="project 1" className="ProjectShow__imgs-1" />
        <img src={project2Img} alt="project 2" className="ProjectShow__imgs-2" />
      </Container>
    </div>
  );
};

export default ProjectShow;
