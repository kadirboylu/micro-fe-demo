import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";

import Header from "home/components/Header";
import Footer from "home/components/Footer";
import PDPContent from "pdp/components/PDPContent";
import HomeContent from "home/components/HomeContent";
import CartContent from "cart/components/CartContent";

export default function MainLayout() {
  return (
    <Router>
      <div>
        <Header />
        <div className="content bg-gray-100">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/product/:id" component={PDPContent} />
            <Route path="/cart" component={CartContent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
