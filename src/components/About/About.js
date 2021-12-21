import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import bg from "./img/bg.jpg";
import aurora from "./img/Aurora.png";
import {Helmet} from "react-helmet";


class About extends React.Component {
    render() {
        return(
            <>
                <Helmet>
                    <title>TEDxUCSD | About Us</title>
                </Helmet>
                <div>hello</div>
            </>

            // <div>
            //     <div className="content">
            //         <div className="bg" style={{
            //             textAlign: "center",
            //             paddingTop: "4rem",
            //         }}>
            //             <img src={bg} alt="banner" style={{
            //                 width: "800px",
            //                 height: "100%"
            //             }}/>
            //         </div>

            //         <div className="intro">
            //             <h1 className="header"> WHAT IS <span style={{color: "red"}}>TEDx</span>UCSD? </h1>
                        
            //             <p style={{
            //                 padding: "2rem",
            //                 margin: "auto",
            //                 width: "75rem",
            //                 fontSize: "1.7rem"
            //             }}>TEDxUCSD’s mission is to bring together leading thinkers and doers to share ideas that matter in and to any discipline - technology, entertainment, design, science, humanities, business, development, and much more. Through a local forum, we hope to inspire people to change their lives, their futures, and ultimately their world.</p>
            //         </div>
            //     </div>

            //     <div className="team">
            //         <div className="box" style={{
            //             paddingLeft: "4rem",
            //             fontSize: "2rem"
            //         }}>
            //             <h1 className="header" >MEET THE TEAM</h1>
            //             <div className="row">
            //                 <div className="column left">
            //                     <img class="pfp" src={aurora}/>
            //                     <p className="title">Co-director</p>
            //                 </div>
            //                 <div className="column middle">
            //                     <img class="pfp" src={aurora}/>
            //                     <p className="title">Co-director</p>
            //                 </div>
            //                 <div className="column right">
            //                     <img class="pfp" src={aurora}/>
            //                     <p className="title">Co-director</p>
            //                 </div>
            //             </div>

            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default About;