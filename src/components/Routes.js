import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";

const Routes = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about/1">About</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about/:name">
        <About />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  );
};

export default Routes;
