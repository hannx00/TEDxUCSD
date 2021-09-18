import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

class App extends React.Component {
  render() {
    return(
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
