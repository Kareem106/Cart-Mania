import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./MyCard.css";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { UsersContext } from "../../Context/UsersContext";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
function MyCard({ item }) {
  const navigate = useNavigate();
  const { id, title, description, thumbnail, price, rating } = item;
  const [btHover, setBtState] = useState(false);
  const { cartHandler } = useContext(CartContext);
  const { currentUser } = useContext(UsersContext);
  return (
    <Card className="w-100 Card m-auto" style={{ width: "18rem" }}>
      <Card.Img
        onClick={() => {
          console.log("card");
          navigate(`/ProductsDetails?id=${item.id}`);
        }}
        className="Card-Img"
        variant="top"
        src={thumbnail}
      />
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="text">{description}</Card.Text>
        <Card.Text>Rating:⭐{rating}</Card.Text>
        <Button
          onClick={() => {
            if (currentUser != null) {
              cartHandler(item);
            } else {
              alert("sign in first!");
            }
          }}
          style={{ transition: "0.5s" }}
          variant={btHover ? "warning" : "dark"}
          onMouseOver={() => setBtState(true)}
          onMouseOut={() => setBtState(false)}
          className={`text-center w-100 fs-5 ${btHover ? "text-light" : ""}`}
        >
          {btHover ? "Add To Cart" : `$${price}`}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
