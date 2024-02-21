import { Col, Row } from "react-bootstrap";
import MyCarousel from "../Components/Carousel/MyCarousel";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
export default function Home() {
  const { productsData } = useContext(DataContext);
  const [item1, item2, item3,item4,item5,item6] = [
    productsData[3],
    productsData[4],
    productsData[5],
    productsData[6],
    productsData[7],
    productsData[8]
  ];
  return (
    <>
      <MyCarousel></MyCarousel>
      <h1 className="h1 text-center my-5 bg-dark text-light py-3">
        New Arrival
      </h1>
      <Row>
        <Col className="col-lg-4 col-12 me-0 my-2 text-center fs-4">
          <Card>
            <Card.Img
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={item1?.thumbnail}
            />
            <Card.Body>
              <Card.Text>{item1?.title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  className="col-lg-4 col-12 my-2 text-center fs-4">
          <Card>
            <Card.Img
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={item2?.thumbnail}
            />
            <Card.Body>
              <Card.Text>{item2?.title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  className="col-lg-4 col-12 my-2 text-center fs-4">
          <Card>
            <Card.Img
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={item3?.thumbnail}
            />
            <Card.Body>
              <Card.Text>{item3?.title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-lg-4 col-12 me-0 my-2 text-center fs-4">
          <Card>
            <Card.Img
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={item4?.thumbnail}
            />
            <Card.Body>
              <Card.Text>{item4?.title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  className="col-lg-4 col-12 my-2 text-center fs-4">
          <Card>
            <Card.Img
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={item5?.thumbnail}
            />
            <Card.Body>
              <Card.Text>{item5?.title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col  className="col-lg-4 col-12 my-2 text-center fs-4">
          <Card>
            <Card.Img
              style={{ height: "20rem", objectFit: "cover" }}
              variant="top"
              src={item6?.thumbnail}
            />
            <Card.Body>
              <Card.Text>{item6?.title}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
