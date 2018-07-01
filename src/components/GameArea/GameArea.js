import React from "react";
import "./GameArea.css";

const GameArea = props => (
    <div className="col-xs-6 col-sm-4 col-md-3 imgHolder" id={props.shake} onClick={() => props.checkImg(props.alt)}>
        <img src={props.url} alt={props.alt}/>
    </div>
)

export default GameArea;
