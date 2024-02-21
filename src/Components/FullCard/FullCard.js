import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState,useContext } from "react";
import { CartContext } from "../../Context/CartContext";
export default function FullCard({ item }) {
    const {deleteHandler,quantityHandler}=useContext(CartContext);
  const [counter, setCounter] = useState(item?.quantity);
  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decreaseHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  useEffect(() => {
    quantityHandler(item,counter)
  }, [counter]);
  return (
    <Row className="my-3 p-0 shadow rounded bg-light">
      <Col className="col-3">
        <img
          src={item?.thumbnail}
          style={{
            width: "100%",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        ></img>
      </Col>
      <Col className="col-3 m-auto">
        <h3>{item?.title}</h3>
        <p>{item?.description}</p>
      </Col>
      <Col className="col-3 m-auto">
        <div className="input-group row justify-content-end">
          <Button
            onClick={increaseHandler}
            style={{
              width: "50px",
            }}
          >
            +
          </Button>
          <input
            style={{
              width: "50px",
              textAlign: "center",
            }}
            value={counter}
          ></input>
          <Button
            onClick={decreaseHandler}
            style={{
              width: "50px",
            }}
          >
            -
          </Button>
        </div>
      </Col>
      <Col className="co3-1 m-auto text-end">
        <Button
        onClick={()=>deleteHandler(item)}
        className="btn fs-4" variant="danger">
          <FontAwesomeIcon icon={faDeleteLeft} />
        </Button>
      </Col>
    </Row>
  );
}
