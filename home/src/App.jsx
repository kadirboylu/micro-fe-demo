import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";

const App = () => (
  <div>
    <Header />
    <div className="content bg-gray-100">
      <HomeContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
