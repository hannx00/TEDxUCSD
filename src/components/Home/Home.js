import React from "react";
import constell from "./img/constell.png";
import podcast from "./img/podcast1.png";
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
                                height: "500px",
                            }}> 
                                <div className="innerContainer" style={{
                                    paddingTop: "3rem",
                                    marginLeft: "5rem",
                                    fontSize: "4rem",
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

                                    <div style={{fontSize: "1.8rem",padding: "1rem", width: "65rem"}}>
                                        <p>
                                            Bring together leading thinkers and doers to share ideas that matter in and to any discipline  - technology, entertainment, design, science, humanities, business, development, and much more.
                                        </p>
                                    </div>

                                    <div style={{paddingLeft: "1rem"}}>
                                        <a className="button" >
                                            LEARN MORE
                                            <span className="shadow"></span>
                                        </a>
                                    </div>

                                    <span style={{display: "table", clear: "both",}}></span>
                                </div>
                            </div>

                            <div className="outerContainer" style={{
                                    padding: "5rem",
                                    boxSizing: "border-box",
                                    height: "1350px",
                                    width: "100%",
                                    position: "absolute",

                                }}> 
                                <h1 className="header" style={{textAlign: "center", fontSize: "3.5rem"}}> TEDX'S HIGHLIGHTS</h1>

                                <div className="innerContainer" style={{
                                    padding: "4rem 1rem",
                                    textAlign: "center",
                                    position: "relative",
                                    height: "550px",
                                    width: "100%",
                                    whiteSpace: "normal",
                                    overflow: "hidden"
                                }}> 
                                    <div className="contell logo" style={{
                                        height: "100%",
                                        width: "50%",
                                        float: "left",
                                        cursor: "pointer",
                                    }}>
                                        <a>
                                            <img src={constell} style={{width: "60%"}}/>
                                        </a>
                                    </div>

                                    <div className="constell script" style={{
                                        height: "100%",
                                        width: "50%",
                                        float: "right",
                                        padding: "4rem 1rem",
                                        fontSize: "1.6rem"
                                    }}>
                                        <p>Our main event that we've been working so hard on for the past year is taking place on May 15th and 16th. Feel free to pre-register via zoom below and come to discover more about the stories that connect us. From live talks to Q+As, you won't want to miss it!</p>
                                        
                                        <div style={{paddingTop: "3rem", borderRadius: "5px", textDecoration: "none"}}>
                                            <a href="https://youtube.com/playlist?list=PLg1NTgC-T_v3aGs4TwZhRpZce89dfQNBi" target="_blank" className="button" >
                                                WATCH HERE 
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="innerContainer" style={{
                                    padding: "5rem 1rem",
                                    textAlign: "center",
                                    position: "relative",
                                    height: "650px",
                                    width: "100%",
                                    whiteSpace: "normal",
                                    overflow: "hidden"
                                }}> 
                                    <div className="podcast script" style={{
                                        height: "100%",
                                        width: "50%",
                                        float: "left",
                                        padding: "4rem 1rem",
                                        fontSize: "1.6rem"
                                    }}>
                                        <h1 >We started a podcast! </h1>
                                        <p style={{paddingTop: "2rem"}}>UC San Diego is made of 1200+ acres and even more untold stories from the students who go here. Join the TEDxUCSD team every Friday as we interview UC San Diego students who have ideas worth spreading. Every episode will plunge you into their powerful stories and leave you with a refreshing new perspective.</p>
                                        
                                        <div style={{paddingTop: "3rem", borderRadius: "5px", textDecoration: "none"}}>
                                            <a href="https://youtube.com/playlist?list=PLg1NTgC-T_v3aGs4TwZhRpZce89dfQNBi" target="_blank" className="button" >
                                                LISTEN ON SPOTIFY
                                            </a>
                                        </div>
                                    </div>

                                    <div className="podcast logo" style={{
                                        height: "100%",
                                        width: "50%",
                                        float: "left",
                                        cursor: "pointer",
                                    }}>
                                        <a>
                                            <img src={podcast} style={{width: "60%"}}/>
                                        </a>
                                    </div>
                                </div>

                                <div className="footer">hehe</div>

                                

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Home;