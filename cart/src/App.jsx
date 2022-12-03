import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import CartContent from "./components/CartContent";

const App = () => (
  <div>
    <CartContent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
