import React from "react";
import "./ProfiDetail.css";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Profile from "../../../Profile/Profile";
import Rating from '@mui/material/Rating';

export default function ProfiDetail() {
    return (
        <div className="profileD">
            <div className="pro1">
                <div className="p1">
                    <p>Samuel Raj</p>
                    <div className="about"><span>About : </span>Fullstack</div>
                    <div className="hobbies"><span>Hobbies : </span>Listening Music, learn new things and playing guitar</div>
                    <div className="skills"><span>Skills : </span><div className="badge"> html5 </div> <div className="badge">css3</div> <div className="badge">    jquery</div> </div>
                </div>

                <div className="p2">
                    <Profile />
                    <Rating
                        name="simple-controlled"
                        value="4"
                        readOnly
                        size="small"
                    />
                </div>
            </div>
            <hr />
            <div className="iconsDe">
                <div className="info"><QuestionAnswerOutlinedIcon className="ico1" /><div>192</div><button className="viewBtn">View</button></div>
                <div className="info"><FavoriteBorderOutlinedIcon className="ico2" /><div>5K+</div><button className="followBtn">Follow</button></div>
                <div className="info"><AccessibilityIcon className="ico3" /><div>32</div><button className="profileBtn">Profile</button></div>
            </div>
        </div>
    );
}