import React,{useState,useEffect} from "react";
import "./Profile.css";
import Avatar from '@mui/material/Avatar';

export default function Profile(props){

    useEffect(()=>{
        upColor(props.color);
    });

    let [color,upColor] = useState("");

    return <Avatar className="profileImg" style={{ fontSize: '20px', cursor:'pointer', border: `2px solid ${color}` }} />;
}

