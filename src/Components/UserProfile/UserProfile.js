import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UsersContext } from "../../Context/UsersContext";
import { CartContext } from "../../Context/CartContext";
import Button from "react-bootstrap/Button";
export default function UserProfile() {
  const { currentUser,currentUserOut,deleteCurrentUser } = useContext(UsersContext);
  const { cartData } = useContext(CartContext);
  return (
    <Container className="p-5">
      <Row>
        <Col className="col-12 text-center">
          <FontAwesomeIcon
            icon={faUser}
            className="fs-1 p-5"
            style={{ border: "2px solid white", borderRadius: "50%" }}
          />
          <h3>{currentUser.email.split('@')[0]}</h3>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 text-center py-5 fs-3">
        <p>Email : {currentUser.email}</p>
        <p>password : {currentUser.password}</p>
        <Button
        onClick={currentUserOut}
        className="fs-4 my-3 text-light" variant="warning">Sign Out</Button>
        <br></br>
        <Button
        onClick={deleteCurrentUser}
        className="fs-4 my-3 text-light" variant="danger">Delete Account</Button>
        </Col>
      </Row>
    </Container>
  );
}
