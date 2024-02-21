import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import MiniCard from "../MiniCard/MiniCard";
import { UsersContext } from "../../Context/UsersContext";
import { useNavigate } from "react-router-dom";
function MyNav() {
  const navigate=useNavigate();
  const { cartData } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { currentUser } = useContext(UsersContext);
  return (
    <Navbar className="fs-5 fixed-top" collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand  style={{overflow:"hidden"}}>
          <img
            src={require("../../assets/logo.png")}
            style={{
              width: "60px",
              aspectRatio: "1/1",
              objectFit: "cover",
              transform: "scale(2.5)",
            }}
          ></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-light">
            <Link className="nav-link" to="Home">
              Home
            </Link>
            <Link className="nav-link" to="Shop">
              Shop
            </Link>
            <Link className="nav-link" to="About">
              About
            </Link>
            <Link className="nav-link" to="Users">
              All Users
            </Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleShow} >
              <Link className=" nav-link px-2 text-warning">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
                <Badge bg="secondary">{cartData.length}</Badge>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="nav-link px-2 text-warning" to="User">
                <FontAwesomeIcon icon={faUser} size="lg" />
                {currentUser !== null ? currentUser.email.split("@")[0] : ""}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflowY: "scroll", maxHeight: "50vh" }}>
          {cartData.map((item) => {
            return <MiniCard item={item}></MiniCard>;
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            navigate('/Cart');
            handleClose();
          }}>
            open Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default MyNav;
