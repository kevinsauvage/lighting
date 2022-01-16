import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "./Projects.scss";

const Projects = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="Projects">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Projects;
