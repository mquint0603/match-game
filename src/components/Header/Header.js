import React from "react";
import "./Header.css";

const Header = props => (
    <div className="container-fluid">
        <div className="row">
            <nav className="col-lg-12 navbar">
                <h1 className="nav-item">React Memory Game</h1>
                <h4 className="Message">{props.message}</h4>
                <h2 className="score">Score: {props.score}</h2>
            </nav>
        </div>
    </div>
)

export default Header;

