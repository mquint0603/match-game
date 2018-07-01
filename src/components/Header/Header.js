import React from "react";
import "./Header.css";

const Header = props => (
    <div className="container-fluid">
        <div className="row">
            <nav className="col-lg-12 navbar fixed-top">
                <h2 className="nav-item">The Office Memory Game</h2>
                <h4 className="Message">{props.message}</h4>
                <h4 className="score">Score: {props.score}  |  Top Score: {props.topScore}</h4>
            </nav>
        </div>
    </div>
)

export default Header;

