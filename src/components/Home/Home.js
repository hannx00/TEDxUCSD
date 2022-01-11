import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Typewriter from 'typewriter-effect';
import { withRouter } from 'react-router-dom';
import { Events } from "./Events";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

class Home extends React.Component {
    toAbout=()=> {
        this.props.history.push("/about");
    } 
    render() {
        return(
            <>
                <header> 
                    <Container className="banner" fluid>
                        <h1 className="typewriter">
                            <Typewriter 
                                options = {{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings:[ "TEDxUCSD - IDEAS WORTH SPREADING"],
                                cursor:"",
                                }}
                            />
                        </h1>
                        <p className="banner-script">
                            Bring together leading thinkers and doers to share ideas that matter in and to any discipline  - technology, entertainment, design, science, humanities, business, development, and much more.
                        </p>
                        <Button id="about-btn" onClick={this.toAbout}>LEARN MORE</Button>
                    </Container>
                </header>
                <main fluid>
                    <h1 className="event-header"> TEDX'S HIGHLIGHTS </h1>
                    {/* event card */}
                    <article>
                        {Events.map((item, index) => {
                            return (
                                <Row xs={1} sm={2} className="event-card" key={index}>
                                    <Col className="event-img">
                                        <Image src={item.img} fluid/>
                                    </Col>
                                    <Col className="event-overview">
                                        <p className="event-description">{item.description}</p>
                                        <Button className="event-btn" onClick={() => window.open(item.btn_url, "_blank")}>{item.btn}</Button>
                                    </Col>
                                </Row> 
                            )
                        })}
                    </article>
                </main>
                

            </>
        );
    }
}

export default withRouter(Home);