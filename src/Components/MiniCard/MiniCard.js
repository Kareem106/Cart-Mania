import { Button } from "react-bootstrap";
import "./MiniCardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
export default function MiniCard({ item }) {
  const {deleteHandler}=useContext(CartContext);
  const { title, thumbnail, price, quantity } = item;
  return (
    <div className="mini-card">
      <div className="details">
        <img src={thumbnail}></img>
        <div className="info">
          <span className="h5 title">{title}</span>
          <span className="price">
            {quantity} x {price}
          </span>
        </div>
      </div>
      <Button
      onClick={()=>deleteHandler(item)}
      className="btn fs-4" variant="danger">
      <FontAwesomeIcon icon={faDeleteLeft} />
      </Button>
    </div>
  );
}
