import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "home/components/Header";
import Footer from "home/components/Footer";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">PDP Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
