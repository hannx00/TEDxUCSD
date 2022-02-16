import React from 'react';
import "./Footer.css";
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-section">
                <Row xs={1} sm={2}>
                    <Col className='footer-tedx_logo'>
                        <p className="tedx-logo">© 2021 <span style={{color:"#CC3E40"}}>TEDX</span>UCSD</p>
                        <p className="tedx-description">This independent TEDx event is operated under license from TED.</p>
                    </Col>
                    <Col className="footer-links">
                        <Row xs={1} sm={2} lg={4}>
                            <Col>
                                <a id="email" href="mailto:tedxucsd@gmail.com" target="_blank"> Email </a>
                            </Col>
                            <Col>
                                <a id="fb" href="https://www.facebook.com/TEDxUCSD" target="_blank">Facebook</a>
                            </Col>
                            <Col>
                                <a id="linkedin" href="https://www.linkedin.com/company/tedxucsd/" target="_blank">LinkedIn</a>
                            </Col>
                            <Col>
                                <a id="ig" href="https://www.linkedin.com/company/tedxucsd/" target="_blank">Instagram</a>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col xs={2}>
                        <a class="fb" href="https://www.facebook.com/TEDxUCSD" target="_blank">
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="ig" href="https://www.instagram.com/tedxucsd/" target="_blank">
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="linkedin" href="https://www.linkedin.com/company/tedxucsd/" target="_blank">
                        </a>
                    </Col>
                    <Col xs={2}>
                        <a class="linkedin" href="mailto:tedxucsd@gmail.com" target="_blank">
                        </a>
                    </Col>
                </Row> */}
                </Row>
            </footer>
        )
    }
}
export default Footer;