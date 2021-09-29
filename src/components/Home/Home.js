import React from "react";
import constell from "./img/constell.png";
import podcast from "./img/podcast1.png";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Typewriter from 'typewriter-effect';
// import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return(
            <>
                <Container fluid>
                    <Row> <Navbar /> </Row>
                </Container>

                <Container className="banner" fluid>
                    <Row className="typewriter">
                        <Typewriter 
                            options = {{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings:[ "TEDxUCSD - IDEAS WORTH SPREADING"],
                            }}
                        />
                    </Row>

                    <Row className="banner-script">Bring together leading thinkers and doers to share ideas that matter in and to any discipline  - technology, entertainment, design, science, humanities, business, development, and much more.
                    </Row>

                    <div style={{padding: "1rem 0.8rem 0"}}>
                        <a className="button" >
                            LEARN MORE
                            <span className="shadow"></span>
                        </a>
                    </div>   
                </Container>

                <Container fluid>
                    <Row className="event-header">
                        <h1> TEDX'S HIGHLIGHTS </h1>
                    </Row>

                    {/* <div> 
                        <Row>
                            <div className="col">
                                <img className="constell-img" src={constell} />
                            </div>  
                        </Row>

                        <Row>
                            <div className="col">
                                <p>
                                    Our main event that we've been working so hard on for the past year is taking place on May 15th and 16th. Feel free to pre-register via zoom below and come to discover more about the stories that connect us. From live talks to Q+As, you won't want to miss it!
                                </p>
                            </div>
                        </Row>
                    </div> */}
                    <div>
                        <div className="col">
                            <img className="constell-img" src={constell} />
                        </div>

                        <div className="col">
                            <p className="constell-script">Our main event that we've been working so hard on for the past year is taking place on May 15th and 16th. Feel free to pre-register via zoom below and come to discover more about the stories that connect us. From live talks to Q+As, you won't want to miss it!</p>
                            
                            {/* <Button> WATCH ON YOUTUBE</Button> */}
                        </div>

                        <Button> WATCH ON YOUTUBE</Button>

                    </div>
                </Container>
            </>
        );
    }
}

export default Home;