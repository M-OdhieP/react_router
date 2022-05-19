import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <Container>
      <h1>Halaman About</h1>
      <Link to="/about/team" className="btn btn-outline-dark">
        About Team
      </Link>
      <Outlet />
    </Container>
  );
}
