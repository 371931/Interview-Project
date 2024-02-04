import React, { useState } from "react";
import "./Leftbar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import IcecreamIcon from '@mui/icons-material/Icecream';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Profile from "../Profile/Profile.jsx";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
import Badge from "../Badge/Badge.jsx";

export default function Leftbar(){

    let fontSize = {fontSize:"15px"};

    let date = new Date();

    let [year,upYear] = useState(date.getFullYear());

    return(
        <div className="leftbar">
            <div className="proLeftBar">
                <Profile color="#666" /> 
                <div>
                    <div className="nameLeft"><b>Samuel Raj</b></div>
                    <div className="roleLeft">FullStack</div>
                </div>
            </div>
            <div className="dashboard"><DashboardIcon/> DASHBOARD </div>
            <div ><EmailIcon style={fontSize}/> EMAIL</div>
            <div><CalendarTodayIcon style={fontSize} /> CALENDAR <Badge value="HOT" bg="red"/> </div>
            <div ><IcecreamIcon style={fontSize}/> MATERIAL <Badge bg="#4faf54" value="NEW"/></div>
            <div > <AlignHorizontalCenterIcon style={fontSize} /> UI KIT <Badge value="10" bg="#2c98f0" marl="60px"/> <ArrowBackIosIcon className="arrow" /></div>
            <div ><div className="star" >*</div> ICONS <Badge value="2" bg="#4054b2" padding="3px" marl="59px"/><ArrowBackIosIcon className="arrow" /></div>
            <div ><BarChartOutlinedIcon style={fontSize} />CHARTS <ArrowBackIosIcon className="arrow" /></div>
            <div > <TextSnippetIcon style={fontSize} /> FORMS <ArrowBackIosIcon className="arrow" /></div>
            <div className="division">{year}<div className="copySym">&copy;</div> <div className="matria">MATRIA</div></div>
        </div>
    );
}