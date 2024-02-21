import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import DataProvider from "./Context/DataProvider";
import CartProvider from "./Context/CartProvider";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./Context/SearchProvider";
import UsersProvider from "./Context/UsersProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersProvider>
  <CartProvider>
    <DataProvider>
      <SearchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </SearchProvider>
    </DataProvider>
  </CartProvider>
  </UsersProvider>
);
