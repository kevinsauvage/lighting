import Container from "../../Layout/Container/Container";
import Section from "../../Layout/Section/Section";
import ProjectFilters from "../ProjectFilters/ProjectFilters";
import ProjectRow from "../ProjectRow/ProjectRow";
import "./ProjectList.scss";

const ProjectList = () => {
  const projects = [
    { title: "Sailing", date: "2021", path: "Sailing" },
    { title: "Rukami festival", date: "2021", path: "Rukami_festival" },
    { title: "Korean restaurant", date: "2020", path: "Korean_restaurant" },
    { title: "CIAN", date: "2019", path: "CIAN" },
    { title: "The ecosystem", date: "2019", path: "The_ecosystem" },
    { title: "Webium", date: "2019", path: "Webium" },
    { title: "Staartum", date: "2018", path: "Staartum" },
    { title: "Cammping", date: "2017", path: "Cammping" },
  ];

  return (
    <Container className="ProjectList">
      <Section className="ProjectList__banner">
        <h1 className="ProjectList__title">FEATURED</h1>
        <div className="ProjectList__titleWrapper">
          <h2 className="ProjectList__title">WORKS</h2>
          <p className="ProjectList__subtitle">
            The best from web design, app design, graphic design & branding
          </p>
        </div>
      </Section>
      <Section>
        <ProjectFilters />
        {projects.map((item, i) => (
          <ProjectRow key={i} item={item} />
        ))}
      </Section>
    </Container>
  );
};

export default ProjectList;
