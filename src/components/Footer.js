import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="text-center">
            <a
              href="https://twitter.com/nuko973663"
              target="_blank"
              rel="noreferrer"
            >
              @nuko973663
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
