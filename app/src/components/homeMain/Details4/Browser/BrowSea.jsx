import React from "react";
import "./BrowSea.css";
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


const data = [
    { label: 'Chrome', value: 400, color: '#354491' },
    { label: 'FireFox', value: 300, color: '#408a44' },
    { label: 'Safari', value: 300, color: '#c73832' },
    { label: 'IE', value: 200, color: '#bf1e53' },
    { label: 'Other', value: 100, color: '#3fb0e5' },
];

const sizing = {
    margin: { right: 75 },
    legend: { hidden: true },
};

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

export default function BrowSea() {

    return (
        <div className="browSea">
            <p>BROWSER SHARE</p>
            <hr />
            <PieChart className="pieChar"
                series={[
                    {
                        innerRadius: 40,
                        outerRadius: 80,
                        padding:5,
                        data,
                        arcLabel: getArcLabel,
                    },
                ]}
                width={400}
                height={200}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontSize: 10,
                    },
                }}
                {...sizing}
            />

            <div>
                <ul className="broeList">
                    <div className="fd"><li className="l1 ld"><div></div> Chrome</li>
                    <li className="l2 ld"><div></div> Firefox</li>
                    <li className="l3 ld"><div></div> Safari</li>
                    <li className="l4 ld"><div></div> IE</li></div>
                    <div><li className="l5 ld"><div></div> Other</li></div>
                </ul>
            </div>
        </div>
    );
}