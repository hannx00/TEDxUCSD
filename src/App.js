import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './styles/app.scss';

class App extends React.Component {
  render() {
    return(
      <div className="page-container">
        <div className="content-wrap">
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
            <Route exact path="/sponsors">
              <Sponsors />
            </Route>
          </Switch>
        </Router>          
      </div>
      <Footer />
      </div>

    );
  }
}

// // render(<App />, window.document.getElementById('app'));
export default App;


