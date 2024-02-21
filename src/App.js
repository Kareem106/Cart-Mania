import logo from "./logo.svg";
import "./App.css";
import MyNav from "./Components/MyNav/MyNav";
import Shop from "./Pages/Shop";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import User from './Pages/User'
import MyFooter from "./Components/Footer/MyFooter";
import { Route, Routes } from "react-router-dom";
import ProductsDetails from "./Pages/ProductsDetails";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Users from "./Pages/Users";
function App() {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: "#D6D6D6" }}>
      <MyNav></MyNav>
      <Container
        style={{
          padding: "7rem 0",
          minHeight:"calc(100vh - 212px)"
        }}
      >
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route path="/Shop" element={<Shop></Shop>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Users" element={<Users></Users>}></Route>
          <Route path="/User" element={<User></User>}></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route path="/ProductsDetails" element={<ProductsDetails></ProductsDetails>}></Route>
        </Routes>
      </Container>
      <MyFooter></MyFooter>
    </Container>
  );
}

export default App;
