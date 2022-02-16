import React from "react";
import "./About.css";
import {Helmet} from "react-helmet";
import {TeamInfo} from "./TeamInfo";
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';



class About extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>TEDxUCSD | About Us</title>
                </Helmet>
                <main fluid>
                    <Image src={require("../assets/img/bg.jpg").default} alt="tedx-background" fluid/>
                    <h1 className="about-header">WHAT IS <span style={{color:"red"}}>TEDx</span>UCSD?</h1>
                    <p className="about-description">TEDxUCSD's mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline - technology, entertainment, design, science, humanities, business, development, and much more. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately their world.</p>
                    <h3 className="team-header">MEET OUR 2011-2022 TEAM</h3>
                    <article>
                        <Row xs={1} md={2} lg={3} className="info-card">
                            {TeamInfo.map((item, index) => {
                                return(
                                    <Col className="info" key={index}>
                                        <Image className="info-img" src={item.img} fluid/>
                                        <p className="info-name">{item.name}</p>
                                        <p className="info-title">{item.title}</p>
                                    </Col>
                                )
                            })}
                        </Row>
                    </article> 
                </main>
            </>
        );
    }
}

export default withRouter(About);