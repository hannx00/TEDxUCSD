import './App.css';
import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
