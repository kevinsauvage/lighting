import { useState } from "react";
import "./ProjectFilters.scss";

const ProjectFilters = () => {
  const [selected, setSelected] = useState("WEBSITE");
  const filters = ["WEBSITE", "STRATEGY", "IDENTITY", "UX", "BRANDING"];

  return (
    <div className="ProjectFilters">
      {filters.map((filter, i) => (
        <span
          onClick={() => setSelected(filter)}
          className={`ProjectFilters__item ${selected === filter && "ProjectFilters__item--active"}`}
          key={i}>
          {filter}
        </span>
      ))}
    </div>
  );
};

export default ProjectFilters;
