import React from "react";
import "./Sponsors.css";
import acnh from "./img/under_construction.jpg";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {Helmet} from "react-helmet";

class Sponsors extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>TEDxUCSD | Sponsors</title>
                </Helmet>
                <main fluid>
                    <Image src={acnh} fluid/>
                    <h1 style={{paddingTop:"3rem", width:"80%", margin:"auto"}}>THIS PAGE IS CURRENTLY UNDER DEVELOPMENT🙇 </h1>
                </main>
            </>
        );
    }
}

export default Sponsors;