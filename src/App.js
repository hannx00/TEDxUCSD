import './App.css';
import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
<<<<<<< HEAD
      <div>
        <Home />
      </div>
=======
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
>>>>>>> f4afbcc9313f4021a75c7876136ce1de5cab0e02
    );
  }
}

export default App;
