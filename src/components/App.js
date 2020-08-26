import React from "react";
import "./App.css";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-holder">
        <img src="/medcab-logo.png" alt="cannabis leaf"/>
        <h1>MedCabinet</h1>
        </div>
        <nav>
          <div className="nav-links">
            <Link to="/">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
