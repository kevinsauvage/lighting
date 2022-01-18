import { Link } from "react-router-dom";
import Section from "../../../Layout/Section/Section";
import ProjectFilters from "../../ProjectFilters/ProjectFilters";
import ProjectRow from "../../ProjectRow/ProjectRow";
import "./ProjectHome.scss";

const ProjectHome = () => {
  const projects = [
    { title: "Sailing", date: "2021", path: "Sailing" },
    { title: "Rukami festival", date: "2021", path: "Rukami_festival" },
    { title: "Korean restaurant", date: "2020", path: "Korean_restaurant" },
    { title: "CIAN", date: "2019", path: "CIAN" },
    { title: "The ecosystem", date: "2019", path: "The_ecosystem" },
  ];

  return (
    <Section className="ProjectHome">
      <ProjectFilters />
      {projects.map((item, i) => (
        <ProjectRow key={i} item={item} />
      ))}
      <button className="ProjectHome__btn">
        <Link to="/projects">All projects</Link>
      </button>
    </Section>
  );
};

export default ProjectHome;
