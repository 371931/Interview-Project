import React,{useState} from "react";
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CampaignIcon from '@mui/icons-material/Campaign';
import AppsIcon from '@mui/icons-material/Apps';
import Badge from '@mui/material-next/Badge';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Profile from "../Profile/Profile.jsx";

export default function Navbar(){

    function oncli(){
        document.querySelector(".search").focus();
    }

    return(
        <nav>
            <div className="left">
                <div className="logo"><LogoDevIcon style={{ fontSize: '30px' }} /> MATERIA</div>
                <MenuIcon style={{ cursor:'pointer' }} />
                <div className="searchBar"><SearchIcon className="searchIcon" onClick={oncli} /><input type="text" name="search" placeholder="Type here for search..." className="search"/></div>
                <CropFreeIcon style={{ fontSize: '20px', cursor:'pointer' }} />
                <Badge style = {{cursor:'pointer'}} badgeContent={4} >
                <CampaignIcon style={{ fontSize: '20px', cursor:'pointer' }} />
                </Badge>
            </div>
            <div className="right">
                <Profile />
                <AppsIcon  style={{ fontSize: '25px', cursor:'pointer' }} />
            </div>
        </nav>
    );
}