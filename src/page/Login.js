import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function loginHandler(e) {
    e.preventDefault();

    const checkLogin = true;

    if (checkLogin) {
      navigate("/dashboard");
    }
  }

  return (
    <Container className="mt-4">
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Container>
  );
}
