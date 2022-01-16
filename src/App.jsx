import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Project/Projects";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import ProjectShow from "./Pages/ProjectShow/ProjectShow";
import ProjectList from "./Components/ProjectList/ProjectList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectShow />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <p className="App__copyright">LIGHTNING © 2021</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
