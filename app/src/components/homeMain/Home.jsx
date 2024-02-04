import React from "react";
import "./Home.css";
import Leftbar from "../leftBar/Leftbar";
import Details1 from "./Details1/Details1";
import Details2 from "./Details2/Details2";
import Details3 from "./Details3/Details3";
import Details4 from "./Details4/Details4";
import Details5 from "./Details5/Details5";

export default function Home(){
    return(
        <div className="home">
            <Leftbar />
            <div className="details">
            <Details1 />
            <Details2 />
            <Details3 />
            <Details4 />
            <Details5 />
            </div>
        </div>
    );
}