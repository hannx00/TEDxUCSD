import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import './styles/app.scss';

class App extends React.Component {
  render() {
    return(
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
