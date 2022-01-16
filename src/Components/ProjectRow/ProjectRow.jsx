import { Link } from "react-router-dom";
import "./ProjectRow.scss";

const ProjectRow = ({ item }) => {
  return (
    <Link to={`/projects/${item.path}`} className="ProjectRow">
      <p className="ProjectRow__title">{item.title}</p>
      <p className="ProjectRow__date">{item.date}</p>
    </Link>
  );
};

export default ProjectRow;
