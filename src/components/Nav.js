import { Button, Navbar, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imgLogo from "./logo.svg";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={imgLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Check-Your.NFT{" "}
          <small>
            <small>NFT検証アプリ</small>
          </small>
        </Navbar.Brand>
        <Form className="d-flex">
          <Button variant="success">Connect</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Nav;
