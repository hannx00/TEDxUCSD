import React from "react";
import bg from "./img/ted-background.png";
import "./Home.css"
import Navbar from "../Navbar/Navbar";
import Typewriter from 'typewriter-effect';
import { BrowserRouter } from "react-router-dom";

class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="content">
                    <main>
                        <div className="container">
                            <BrowserRouter> <Navbar /> </BrowserRouter>
                            
                            <div className="outerContainer" style={{
                                backgroundSize: "contain",
                                backgroundColor: "#CC3E40",
                                width: "100%",
                                height: "425px",
                            }}> 
                                <div className="innerContainer" style={{
                                    paddingTop: "3rem",
                                    marginLeft: "5rem",
                                    fontSize: "3rem",
                                    color: "white",
                                }}>
                                    <div className="header" style={{padding: "1rem"}}>
                                        <Typewriter 
                                            options = {{
                                                autoStart: true,
                                                loop: true,
                                                delay: 40,
                                                strings:[ "TEDxUCSD - IDEAS WORTH SPREADING"],
                                            }}
                                        />
                                    </div>

                                    <div style={{fontSize: "1.6rem",padding: "1rem"}}>
                                        <p>
                                            Bring together leading thinkers and doers to share ideas that matter in and to any discipline  - technology, entertainment, design, science, humanities, business, development, and much more.
                                        </p>
                                    </div>

                                    <div  style={{paddingLeft: "1rem", paddingTop: "0.5rem"}}>
                                        <a className="button" >
                                            LEARN MORE
                                            <span className="shadow"></span>
                                        </a>
                                    </div>

                                    <span style={{display: "table", clear: "both",}}></span>
                                </div>
                            </div>

                            <div className="outerContainer" style={{paddingTop: "3rem"}}> 
                                <h1 className="header" style={{textAlign: "center"}}> TEDX'S HIGHLIGHTS</h1>

                                <div className="innerContainer" style={{
                                    padding: "center",
                                    maxWidth: "500px",
                                    maxHeight: "100%",
                                }}> 
                                    <a className="constellate">
                                        constellate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Home;