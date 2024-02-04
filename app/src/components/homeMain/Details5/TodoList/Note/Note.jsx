import React from "react";
import CheckIcon from '@mui/icons-material/Check';

export default function Note(props) {
    return (
        <div className="note">
            <div onClick={() => props.toggleTodo(props.todo.id)} className={`checkBox ${props.todo.completed && 'checked'}`}>
                {props.todo.completed == 1 && <CheckIcon style={{ color: "white", fontSize: 16 }} />}
            </div>
            <div className={`content ${props.todo.completed && 'completed'}`} style={{textDecoration: props.todo.completed && "line-through"}}>
                {props.todo.content}
            </div>
        </div>
    );
}