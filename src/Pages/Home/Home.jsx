import BannerHome from "../../Components/Home/BannerHome/BannerHome";
import Container from "../../Layout/Container/Container";
import "./Home.scss";
import ProjectHome from "../../Components/Home/ProjectHome/ProjectHome.jsx";
import AboutHome from "../../Components/Home/AboutHome/AboutHome";
import Capabilities from "../../Components/Home/Capabilities/Capabilities";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <BannerHome />
        <ProjectHome />
        <AboutHome />
      </Container>
      <Capabilities />
      <Footer />
    </div>
  );
};

export default Home;
