import React from "react";
import "./Details1.css";
import Waves from "../../../assets/images/waves.png";

export default function Details1(){
    return(
        <div className="detail1">
            <div className="left1"><div className="wel">Welcome to Materia</div><div><span>React Js</span> admin app</div>
            </div>
            <div className="right1"><div><img src={Waves} alt="" /></div><b>$1,33,404</b></div>
        </div>
    );
}
