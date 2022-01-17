import { Link, NavLink } from "react-router-dom";
import Container from "../../Layout/Container/Container";
import "./Header.scss";
import Logo from "../../Images/logo.png";

const Header = () => {
  return (
    <div className="Header">
      <Container className="Header__container">
        <div className="Header__logo">
          <img src={Logo} alt="logo" />
          <Link to="/">LIGHTING</Link>
        </div>
        <nav className="Header__nav">
          <ul className="Header__nav-list">
            <li>
              <NavLink
                to="/projects"
                end
                className={(isActive) =>
                  `Header__nav-item ${isActive.isActive ? "Header__nav-item--active" : ""}`
                }>
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                end
                className={(isActive) =>
                  `Header__nav-item ${isActive.isActive ? "Header__nav-item--active" : ""}`
                }>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                end
                className={(isActive) =>
                  `Header__nav-item ${isActive.isActive ? "Header__nav-item--active" : ""}`
                }>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
