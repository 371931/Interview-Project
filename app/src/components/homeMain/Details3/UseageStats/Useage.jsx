import React from "react";
import "./Useage.css";
import Storage from "../../../../assets/images/80.png";
import Server from "../../../../assets/images/35.png";
import Client from "../../../../assets/images/54.png";

export default function Useage() {

    return (
        <div className="useage">
            <p>Useage Stats</p>
            <hr />
            <div className="perImg">
                <img src={Storage} alt="" />
                <img src={Server} alt="" />
                <img src={Client} alt="" />
            </div>
        </div>
    );
}