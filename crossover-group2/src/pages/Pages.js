import React from "react";
import Header from "../components/common/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
      </Router>
    </>
  );
};

export default Pages;
