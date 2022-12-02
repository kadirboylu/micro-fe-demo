import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "home/components/Header";
import Footer from "home/components/Footer";
import CartContent from "./components/CartContent";
import Login from "./components/Login";

const App = () => (
  <div>
    <Header />
    <div className="content bg-gray-100">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
