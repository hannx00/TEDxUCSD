import React from "react";
import "./Events.css";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import {Helmet} from "react-helmet";

class Events extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>TEDxUCSD | Events</title>
                </Helmet>
                <div>events</div>
            </>
        );
    }
}

export default Events;