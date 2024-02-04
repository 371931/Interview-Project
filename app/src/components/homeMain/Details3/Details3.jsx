import React from 'react';
import "./Details3.css";
import Analytics from './analytics/Analytics';
import Activities from './Activities/Activities';
import Useage from './UseageStats/Useage';

export default function Details3(){
    return(
        <div className="gri">
            <Analytics />
            <Activities />
            <Useage />
        </div>
    );
}

