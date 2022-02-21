import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
//import Home from "./Home";
//import Dashboard from "./Dashboard";
import About from "./components/Demo";

const Routes = () => {
  function Home() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
  function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
  return (
    <div className="App">
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
    </div>
  );
};

export default Routes;

// import { useEffect } from "react";
// import Routes from "./components/Routes";
// function App() {
//   useEffect(() => {
//     console.log("Home link clicked.");
//   }, [onClick]);
//   return (
//     <h1>
//       <Routes />
//     </h1>
//   );
// }
// export default App;
