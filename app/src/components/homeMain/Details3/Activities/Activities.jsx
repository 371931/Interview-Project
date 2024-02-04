import React, { useState } from "react";
import "./Activities.css";
import Acti from "./Acti/Acti";

export default function Activities() {

    const [data, upData] = useState([
        {
            time: "2 mins ago",
            text: "Call amma and inform",
        },
        {
            time: "1 hour ago",
            text: "Jonathan attend a meeting",
        },
        {
            time: "2 hours ago",
            text: "Lily created her account",
        },
        {
            time: "3 hours ago",
            text: "Your domain will expired in 13 days.",
        }
    ]);

    return (
        <div className="acti">
            <p>Activities</p>
            <hr />
            <div className="actCon">
            {data.map((val,i) => {
                let randa = color(); 
                return <Acti key={i} val={val} bg={randa} col={randa}/>
            })}
            </div>
        </div>
    );
}

function color(){

    let ran = Math.floor((Math.random() * 4) + 1);

    let color;

    switch(ran){
        case 1:
            color = "#4154b3";
            break;
        
        case 2:
            color = "#50af54";
            break;
        
        case 3:
            color = "#feea4f";
            break;
        
        case 4:
            color = "#2c98f0";
            break;
    }

    return color;
}