import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import MainLayout from "./components/MainLayout";

const App = () => <MainLayout />;
ReactDOM.render(<App />, document.getElementById("app"));
