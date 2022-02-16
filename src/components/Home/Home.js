import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import { withRouter } from 'react-router-dom';
import { Events } from "./Events";
import {Helmet} from "react-helmet";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

class Home extends React.Component {
    toAbout=()=> {
        this.props.history.push("/about");
    } 
    render() {
        return(
            <>
                <Helmet>
                    <title>TEDxUCSD</title>
                </Helmet>
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
                    <h1 className="event-header" style={{display:"block"}}> TEDX'S HIGHLIGHTS </h1>
                    <section className="event-card" style={{display:"block"}}>      
                        <Image className="event-img" src={require("../assets/img/salon21.png").default} style={{paddingTop: "2rem", paddingBottom: "2rem"}}/>
                        <h2 style={{fontWeight:"bold",  fontFamily: "'Montserrat', sans-serif", width:"80%", margin:"auto"}}>TEDxUCSD 2022 WINTER SALON - WHEN <span style={{color: "#CC3E40", fontWeight:"bold"}}>NO ONE </span> IS WATCHING </h2>
                        <p style={{fontSize: "1.5rem"}}> <span className="p-span">Date: Feb 17, 2022</span> <span>Time: 6:00pm-8:00pm </span></p>
                        <p style={{fontSize: "1.3rem", width:"80%", margin:"auto", paddingBottom: "2rem"}}> What is your journey to self-discovery? How have you felt empowered by the most authentic version of yourself? How can your story empower others to embark on their own journey of self-discovery? Join us in uncovering the potential that is locked beneath the surface – the passions, burdens, joys, fears, frustrations, and ultimately the power that comes with being you. No matter your background, views, or aspirations, we invite you to share who you are when no one is watching.</p>                       
                        <Button className="event-btn" onClick={() => window.open("https://bit.ly/watchingprereg", "_blank")}>PRE-REGISTER NOW!</Button>                    
                    </section>
                
                    {/* event card */}
                    <Row xs={1} sm={2}>
                        <Col className="event-card">
                            <Image className="event-img" src={require("../assets/img/constell.png").default} alt="constellate-img"fluid/>
                            <p className="event-description">Our main event that we've been working so hard on for the past year is taking place on May 15th and 16th. Feel free to pre-register via zoom below and come to discover more about the stories that connect us. From live talks to Q+As, you won't want to miss it!</p>
                            <Button className="event-btn" onClick={() => window.open("https://youtube.com/playlist?list=PLg1NTgC-T_v3aGs4TwZhRpZce89dfQNBi", "_blank")}>WATCH ON YOUTUBE</Button>
                        </Col>
                        <Col className="event-card">
                            <Image className="event-img" src={require("../assets/img/podcast1.png").default} alt="podcast-img" fluid/>
                            <p className="event-description">UC San Diego is made of 1200+ acres and even more untold stories from the students who go here. Join the TEDxUCSD team every Friday as we interview UC San Diego students who have ideas worth spreading. Every episode will plunge you into their powerful stories and leave you with a refreshing new perspective.</p>
                            <Button className="event-btn" onClick={() => window.open("#", "_blank")}>LISTEN ON SPOTIFY</Button>
                        </Col>                                             
                    </Row>
                    {/* event card */}
                    {/* Use this when there are more content. Js makes it a lot cleaner :D */}
                    {/* <article>
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
                    </article> */}
                </main>
            </>
        );
    }
}

export default withRouter(Home);