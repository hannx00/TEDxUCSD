import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { HashRouter} from "react-router-dom";
import './styles/app.scss';
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return(
      <HashRouter>
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
      </HashRouter>
    );
  }
}

// // render(<App />, window.document.getElementById('app'));
export default App;


