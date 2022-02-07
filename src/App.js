import { Container, Row, Col } from "react-bootstrap";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import NukoForm from "./components/NukoForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <NukoForm />

      <Container>
        <hr></hr>
      </Container>

      <Container>
        <Row>
          <Col>
            Fully-on-Chain / Metadata decentralized +/- / Image decentralized
            +/-{" "}
          </Col>
        </Row>
        <Row>
          <Col md={6}>URI: Decentralized or Centralized</Col>
          <Col md={6}>
            <div>
              https://api.opensea.io/api/v2/metadata/matic/0x2953399124F0cBB46d2CbACD8A89cF0599974963/0x%7Bid
            </div>
          </Col>
        </Row>
        <Row>
          <Col>Image: Decentralized or Centralized</Col>
          <Col></Col>
        </Row>
      </Container>

      <Container>
        <hr></hr>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default App;
