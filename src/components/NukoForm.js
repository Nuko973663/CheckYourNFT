import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { NukoWeb3 } from "../lib/NukoWeb3";

export default class NukoForm extends React.Component {
  web3;
  n3;
  constructor(props) {
    super(props);
    this.state = {
      isMember: false,
      address: "",
      tokenId: 0,
      chainId: "137",
      name: "",
      symbol: "",
    };
    this.clickMember = this.clickMember.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.n3 = new NukoWeb3();
    this.web3 = this.n3.getWeb3("137");
  }

  async handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });

    if (name === "address") {
      if (this.web3.utils.isAddress(value)) {
        let address = value;
        let name_ = await this.n3.getName(this.state.chainId, address);
        let symbol_ = await this.n3.getSymbol(this.state.chainId, address);

        try {
          await this.n3.getTokenURI(
            this.state.chainId,
            address,
            this.state.tokenId
          );
        } catch (e) {}
        try {
          await this.n3.getUri(this.state.chainId, address, this.state.tokenId);
        } catch (e) {}

        this.setState({ name: name_, symbol: symbol_ });
      } else {
        console.log("invalid address");
      }
    }
  }

  clickMember() {
    this.setState({ isMember: !this.state.isMember });
  }

  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Button variant="outline-primary" size="sm">
                  Ethereum
                </Button>{" "}
                <Button variant="outline-secondary" size="sm" active>
                  Polygon
                </Button>{" "}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contract Address</Form.Label>
                <Form.Control
                  name="address"
                  onChange={this.handleChange}
                  placeholder="0x2953399124f0cbb46d2cbacd8a89cf0599974963"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Token ID</Form.Label>
                <Form.Control
                  name="tokenId"
                  onChange={this.handleChange}
                  placeholder="7031209694663195337869951060551549968094488297481025167430412259478489530388"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I'm a member of Unofficial Club JPYC"
                  onChange={this.clickMember}
                  checked={this.state.isMember}
                />
                Don't know? Look at{" "}
                <a
                  href="https://nuko973663.github.io/UnofficialClubJPYCminter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  this page
                </a>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                disabled={!this.state.isMember}
              >
                Check it
              </Button>
            </Form>
          </Col>
          <Col md={4}>
            <img
              src="https://lh3.googleusercontent.com/0GfGMD54j6c-QNyoINyHFgse6IUOqqezh5eSCcRF85eo-rmJBAUp6Mkpw6a_3yu4WFek9De_dNFWgJQBgOflARdN902mfjd6SzBcCQ=w600"
              width="100%"
              alt="NFT"
            />
            <span>{this.state.symbol}</span>
          </Col>
        </Row>
      </Container>
    );
  }
}
