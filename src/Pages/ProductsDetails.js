import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSearchParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context/CartContext";
import { UsersContext } from "../Context/UsersContext";
export default function ProductsDetails() {
    const [btHover, setBtState] = useState(false);
    const { cartHandler } = useContext(CartContext);
    const { currentUser } = useContext(UsersContext);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("id");
  const { productsData } = useContext(DataContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    for (let i of productsData) {
      if (i.id == productId) {
        setProduct(i);
        break;
      }
    }
  }, [productsData]);
  return (
    <Container>
      <Row>
        <Col className="col-lg-6 col-12">
          <Carousel className="carousel">
            {
                product?.images.map((e)=>{
                    return(
                        <Carousel.Item>
                        <img src={e}></img>
                      </Carousel.Item>
                    )
                })
            }
          </Carousel>
        </Col>
        <Col>
        <h3>{product?.title}</h3>
        <p className="fs-5">
            <span className="text-warning
            me-3">
            <FontAwesomeIcon icon={faStar}
            className="me-2"/>
            {product?.rating}
            </span>
            <span className="text-success">
            <FontAwesomeIcon icon={faBasketShopping}
            className="me-2" />
                {product?.stock} .in Stock
            </span>
        </p>
        <p className="fs-3 text-dark fw-bolder">
            ${product?.price}
        </p>
        <p>{product?.description}</p>
        <Row>
            <Col className="col-3">
                <p className="fw-bolder">Category </p>
                <p className="fw-bolder">Brand </p>
            </Col>
            <Col>
                <p className="fw-bolder">
                    {product?.category}
                </p>
                <p className="fw-bolder">{product?.brand}</p>
            </Col>
        </Row>
        <Button
          onClick={() => {
            if (currentUser != null) {
              cartHandler(product);
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
         Add To Cart
        </Button>
        </Col>
      </Row>
    </Container>
  );
}
