import React from "react";
import bg from "./img/ted-background.png";
import "./Home.css"
import Navbar from "../Navbar/Navbar";

class Home extends React.Component {
    render() {
        return(
            <div>
                <main> 
                    <Navbar />

                    <div style={{
                    background: "#FF1F1F",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    width:'100%',
                    height: "700px",
                    }}>
                        <div style={{paddingTop: "8vw",}}>
                            <div className="outerContainer"> 
                                <div className="innerContainer"> 
                                    <h1 style={{marginBottom: "3.6rem"}}>TEDXUCSD - IDEAS WORTH SPREADING</h1>
                                    <p style={{width: "1000px", fontSize:"2rem"}}>Bring together leading thinkers and doers to share ideas that matter in and to any discipline - technology, entertainment, design, science, humanities, business, development, and much more.</p>
                                    <div style={{paddingTop: "2rem", paddingBottom: "7.2rem"}}> 
                                        <a class="button text_caption" style={{
                                            color: "rgb(252, 228, 236)",
                                            background: "black",
                                            borderColor: "black",}}>
                                            LEARN MORE
                                            <span class="shadow"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="outerContainer">
                        <div className="innerContainer"> 
                            <h1 style={{color: "black", justifyContent: "center", textAlign: "center"}} >TEDx's HIGHLIGHTS</h1>

                            <div className="event"> </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;