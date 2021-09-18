import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "./img/tedxucsd.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


class Navbar extends React.Component {
    state = { click: false };

    handleClick = () => {
        this.setState({ click : !this.state.click })
    }

    render() {
        return(
            <>
                <div className="navbar">
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
                </div>
            </>
        );
    }
}

export default Navbar;
