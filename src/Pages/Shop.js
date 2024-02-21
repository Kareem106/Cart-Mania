import { Button, Container, Row, Dropdown } from "react-bootstrap";
import MyCard from "../Components/MyCard/MyCard";
import Col from "react-bootstrap/Col";
import { DataContext } from "../Context/DataContext";
import { useState, useContext } from "react";
import { SearchContext } from "../Context/SearchContext";
export default function Shop() {
  const { searchData, searchHandler } = useContext(SearchContext);
  const { productsData } = useContext(DataContext);
  const [currentValue, setCurrentValue] = useState("");
  return (
    <Container>
      <div className="input-group my-5">
        <input
          onChange={(e) => setCurrentValue(e.target.value)}
          type="text"
          className="form-control fs-3"
        ></input>
        <Button
          className="p-3"
          onClick={() => {
            searchHandler(currentValue);
          }}
        >
          Search
        </Button>
        {/* <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
      <Row className="">
        {searchData.map((item) => {
          return (
            <Col className="m-0 col-xl-3 col-lg-6 col-12 p-0   ">
              <MyCard item={item}></MyCard>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
