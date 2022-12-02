import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "home/components/Header";
import Footer from "home/components/Footer";
import CartContent from "./components/CartContent";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="content">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
