import React from "react";
import "./Events.css";
import aot from "./img/aot.jpg";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {Helmet} from "react-helmet";

class Events extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>TEDxUCSD | Events</title>
                </Helmet>
                <main fluid>
                    <Image src={aot} fluid/>
                    <h1 style={{paddingTop:"3rem", width:"80%", margin:"auto"}}>THIS PAGE IS CURRENTLY UNDER DEVELOPMENT🙇 </h1>
                </main>
            </>
        );
    }
}

export default Events;