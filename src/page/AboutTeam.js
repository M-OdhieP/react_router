import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutTeam() {
  return (
    <Container>
      <h1>Ini Adalah Halaman About Team</h1>

      <Link to="/about" className="btn btn-outline-dark">
        Kembali
      </Link>
    </Container>
  );
}
