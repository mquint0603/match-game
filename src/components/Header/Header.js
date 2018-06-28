import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <h1>React Match Game</h1>
        <h2 className="Message">{props.message}</h2>
        <h2 className="score">{props.score}</h2>
    </div>
)

export default Header;