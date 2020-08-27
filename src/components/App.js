import React, { useState } from "react";
import "./App.css";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import { Link, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import NewProfile from "./NewProfile";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-holder">
          <img
            src="/medcab-logo.png"
            className="logo-green"
            alt="cannabis leaf"
          />
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
          <Login setUserData={setUserData} />
        </Route>
        <Route exact path="/register">
          <Register setUserData={setUserData} />
        </Route>
        <Route exact path="/profile">
          <Profile userData={userData} />
        </Route>
        <Route exact path="/new-profile">
          <NewProfile userData={userData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
