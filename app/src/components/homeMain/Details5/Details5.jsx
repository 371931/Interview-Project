import React from "react";
import "./Details5.css";
import TodoList from "./TodoList/TodoList.jsx"
import Table from "./Table/Table.jsx";

export default function Details5(){
    return(
        <div className="details5Con">
            <TodoList />
            <Table />
        </div>
    );
}