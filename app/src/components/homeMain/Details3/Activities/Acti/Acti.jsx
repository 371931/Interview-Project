import React from "react";

export default function Acti(props) {
    return (
        <div className="activity">
            <div className="cod" style={{backgroundColor : props.bg}}>|</div>
            <div className="dot" style={{color: props.col}}>.</div>
            <div className="time">{props.val.time}</div>
            <div className="text">{props.val.text}</div>
        </div>
    )
}

