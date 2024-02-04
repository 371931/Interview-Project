import React,{useState,useEffect} from "react";
import "./Table.css";
import Row from "./Row/Row";

export default function Table() {

    const [tableData,upData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/tableData")
            .then(response => response.json())
            .then(data => upData(data))
            .catch(err => console.log(err));
    },[])

    return (
        <div className="tableCon">
            <p>PROJECT STATS</p>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Project</th>
                        <th>Progress</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((val,i)=>{
                        return <Row key={i} id={val.id} content={val.project} progress={val.progress} date={val.date}/>
                    })}
                </tbody>
            </table>
        </div>
    );
}