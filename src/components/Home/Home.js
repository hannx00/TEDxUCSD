import React from "react";
import bg from "./img/ted-background.png";
import "./Home.css"
import Navbar from "../Navbar/Navbar";
import Typewriter from 'typewriter-effect';

class Home extends React.Component {
    render() {
        return(
            <div className="root">
                <div>
                    <div className="content">
                        <main>
                            <div className="container">
                                <Navbar />
                                
                                <div className="innerContainer" style={{
                                    paddingTop: "5rem",
                                    marginLeft: "5rem",
                                    marginBottom: "5rem",
                                    fontSize: "3rem",
                                    color: "white",
                                }}>
                                    <div className="header">
                                        <Typewriter 
                                            onInit={(Typewriter) => {
                                                Typewriter.typeString("TEDxUCSD - IDEAS WORTH SPREADING")
                                                .start();
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        fontSize: "1.6rem",
                                    }}>
                                        <p>
                                            Bring together leading thinkers and doers to share ideas that matter in and to any discipline  - technology, entertainment, design, science, humanities, business, development, and much more.
                                        </p>
                                    </div>

                                    <div>
                                        <a className="button">
                                            LEARN MORE
                                            <span className="shadow"></span>
                                        </a>
                                    </div>

                                    <span style={{display: "table", clear: "both",}}></span>
                                </div>

                                <div className="outerContainer" style={{paddingTop: "3rem"}}> 
                                    <h1 className="header" style={{textAlign: "center"}}> TEDX'S HIGHLIGHTS</h1>

                                    <div className="innerContainer" style={{
                                        padding: "center",
                                    }}> 
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            // <div className="container" style={{
                // backgroundImage: `url(${bg})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: "cover",
                // width:'100%',
                // height: "500px",
            // }}>
            //     <div className="innerContainer"> 
            //         <div className="header"> TEDXUCSD - IDEAS WORTH SPREADING</div>

            //         <p style={{marginBottom: "3.6rem"}}>
            //         Bring together leading thinkers and doers to share ideas that matter in and to any discipline  - technology, entertainment, design, science, humanities, business, development, and much more.
            //         </p>
            //     </div>
            // </div>
        );
    }
}

export default Home;