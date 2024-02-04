import React from "react";
import "./Details2.css";
import plus from "../../../assets/images/plus.png";
import barchart from "../../../assets/images/barchart.png";
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

export default function Details2() {
    return (
        <div className="container2">
            <div className="earn div">
                <div className="main">
                    <div className="val">
                        <span className="title">$30,200</span>
                        <span className="content">All Earnings</span>
                    </div>
                    <div className="symbol">
                        <div><img src={plus} alt="" className="plus" /></div>
                    </div>
                </div> 
                <div className="under">
                    <div>% change</div>
                    <img src={barchart} alt="" />
                </div>
            </div>

            <div className="views div">
                <div className="main">
                    <div className="val">
                        <span className="title">320k+</span>
                        <span className="content">Page Views</span>
                    </div>
                    <div className="symbol">
                        <div><Groups2OutlinedIcon style={{fontSize : "50px"}} /></div>
                    </div>
                </div> 
                <div className="under">
                    <div>% change</div>
                    <img src={barchart} alt="" />
                </div>
            </div>

            <div className="task div">
                <div className="main">
                        <div className="val">
                            <span className="title">110</span>
                            <span className="content">Task Completed</span>
                        </div>
                        <div className="symbol">
                            <div><ScienceOutlinedIcon style={{fontSize : "50px"}} /></div>
                        </div>
                    </div> 
                    <div className="under">
                        <div>% change</div>
                        <img src={barchart} alt="" />
                </div>
            </div>
            <div className="downloads div">
                <div className="main">
                            <div className="val">
                                <span className="title">10k</span>
                                <span className="content">Downloads</span>
                            </div>
                            <div className="symbol">
                                <div><CloudDownloadOutlinedIcon style={{fontSize : "50px"}} /></div>
                            </div>
                        </div> 
                        <div className="under">
                            <div>% change</div>
                            <img src={barchart} alt="" />
                </div>
            </div>
        </div>
    );
}
