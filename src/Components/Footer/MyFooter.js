import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInsta } from "@fortawesome/free-solid-svg-icons";
import "./FooterStyle.css";
export default function MyFooter() {
  return (
    <Container fluid className="bg-light">
      <Container>
        <Row className="MyFooter fs-5">
          <Col className="col-12 col-md-4">
            <h3 className="h3 text-center">Site links</h3>
            <ul>
              <li>
                <Link className="nav-link" to={"Home"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"Shop"}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="nav-link" to={"About"}>
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-4">
            <img src={require("../../assets/logo.png")}></img>
          </Col>
          <Col className="col-12 col-md-4">
            <p className="fs-3 text-secondary">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook mx-5"></i>
              <i class="fa-brands fa-twitter"></i>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
