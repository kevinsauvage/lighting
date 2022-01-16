import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="Projects">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Projects;
