import React from "react";
import "./Details4.css";
import ProfiDetail from "./profiDetail/ProfiDetail.jsx";
import BrowSea from "./Browser/BrowSea.jsx";
import List from "./List/List.jsx";

export default function Details4() {

    return (
        <div className="details4">
            <ProfiDetail />
            <BrowSea />
            <List />
        </div>
    );
}