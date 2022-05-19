import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./page/Home";
import About from "./page/About";
import AboutTeam from "./page/AboutTeam";
import Blog from "./page/Blog";
import BlogDetail from "./page/BlogDetail";
import NotFound from "./page/NotFound";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";

function App() {
  const classBtn =
    "text-decoration-none btn btn-outline-dark border-0 rounded-0 text-light";

  return (
    <div className="App">
      <Nav className="bg-secondary">
        <Container>
          <Link to="/" className={classBtn}>
            Home
          </Link>
          <Link to="/dashboard" className={classBtn}>
            Dashboard
          </Link>

          <Link to="about" className={classBtn}>
            About
          </Link>
          <Link to="blog" className={classBtn}>
            Blog
          </Link>
          <Link to="login" className={classBtn}>
            Login
          </Link>
        </Container>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="about" element={<About />}>
          <Route path="team" element={<AboutTeam />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
