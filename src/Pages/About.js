import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container className="">
      <Row className="justify-content-center">
        <img
          src={require("../assets/logo.png")}
          style={{
            width: "300px",
          }}
        ></img>
        <h3 className="text-center mb-5">
          This website developed by Kareem Ahmed.{" "}
        </h3>
        <p className="fs-4">
          The idea to simulate an online shopping experience using form
          validation , localStorage to store all users profiles , products Api
          and Cart page to see all products and total price.
        </p>
        <p className="fs-4"> 
          This project uses localStorage to store all users' profiles and
          current user login info.
        </p>
      </Row>
    </Container>
  );
}
