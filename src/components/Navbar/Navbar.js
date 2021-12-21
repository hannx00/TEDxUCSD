import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import tedx_logo from "./img/tedxucsd.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';


class Navbar extends React.Component {
    state = { click: false };

    handleClick = () => {
        this.setState({ click : !this.state.click })
    }

    render() {
        return(
            <>
                <nav className="navbar">
                    <Link to="/" className="navbar-logo">
                            <Image src={tedx_logo} id="tedx-logo" alt="tedx-logo" fluid/>
                    </Link>
                    <div className="menu-icon" onClick={this.handleClick}>
                        {this.state.click ? <FaTimes size={35} color="white"/> : <FaBars size={35} color="white"/>}
                    </div>
                    <ul className={ this.state.click ? "nav-menu active" : "nav-menu"}> 
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li> 
                            );
                        })}
                    </ul>
                </nav>
                {/* <div className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo">
                            <img src={ logo } alt="tedx-logo" style={{
                                width: "13rem",
                                height: "auto",
                                paddingLeft: "13px !important"
                            }}/>
                        </Link>

                        <div className="menu-icon" onClick={this.handleClick}>
                            { this.state.click ? <FaTimes /> : <FaBars /> }
                        </div>
                    </div>

                    <div className="menu-icon" onClick={this.handleClick}>
                        { this.state.click ? <FaTimes /> : <FaBars /> }
                    </div>

                    <ul className={ this.state.click ? "nav-menu active" : "nav-menu"}> 
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li> 
                            );
                        })}
                    </ul>
                </div> */}
            </>
        );
    }
}

export default Navbar;
