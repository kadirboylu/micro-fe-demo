import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "home/components/Header";
import Footer from "home/components/Footer";
import PDPContent from "./components/PDPContent";

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="content bg-gray-100">
        <Switch>
          <Route path="/product/:id" component={PDPContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
