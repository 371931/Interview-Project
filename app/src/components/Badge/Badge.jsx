import React from "react";
import "./Badge.css";

export default function Badge(props) {

    return (
        <div className="badger" style={{ width: props.width, 
            height: props.height == "" ? "10px" : props.height, borderRadius: props.radius == "" ? "0px" : props.radius, backgroundColor: props.bg == "" ? "" : props.bg, justifySelf: "flex-end",
            padding: props.padding == "" ? "2px" : props.padding, fontSize: props.fs == "" ? "10px" : props.fs,
            fontWeight : props.wei == "" ? "" : props.wei,
            marginLeft: props.marl,
            }}
        >{props.value}</div>
    );
}