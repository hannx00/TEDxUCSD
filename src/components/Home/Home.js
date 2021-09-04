import React from "react";
import bg from "./img/ted-background.png";
import "./Home.css"

class Home extends React.Component {
    render() {
        return(
            <div className="container" style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                width:'100%',
                height: "500px",
            }}>
                <div className="innerContainer"> 
                    <div className="header"> TEDXUCSD - IDEAS WORTH SPREADING</div>

                    <p style={{marginBottom: "3.6rem"}}>
                    Bring together leading thinkers and doers to share ideas that matter in and to any discipline  - technology, entertainment, design, science, humanities, business, development, and much more.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;