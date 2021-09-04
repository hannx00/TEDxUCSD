import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import logo from "./img/tedxucsd.png";


class Navbar extends React.Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img src={logo}/>
                    </h1>

                <ul className="menu-items">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} hrel={item.url}>
                                    {item.title}
                                </a>
                            </li> 
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;