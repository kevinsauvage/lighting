import { Link } from "react-router-dom";
import Container from "../../Layout/Container/Container";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <Container className="Header__container">
        <div className="Header__logo">
          <Link to="/">LIGHTING</Link>
        </div>
        <nav className="Header__nav">
          <ul className="Header__nav-list">
            <li className="Header__nav-item">
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li className="Header__nav-item">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="Header__nav-item">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
