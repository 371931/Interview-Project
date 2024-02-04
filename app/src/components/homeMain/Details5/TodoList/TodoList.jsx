import React, { useState, useEffect } from "react";
import "./TodoList.css";
import axios from "axios";
import Note from "./Note/Note";

export default function TodoList() {

    const [check, upCheck] = useState(false);
    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useState([]);
    const [input, upINpu] = useState("");
    const [toloop,upLoop] = useState(0);

    useEffect(() => {
        fetch("http://localhost:4000/todo")
            .then(response => response.json())
            .then((data) => setTodos(data))
            .catch(err => console.log(err));
    }, [toloop])

    useEffect(() => {
        fetch("http://localhost:4000/todo")
            .then(response => response.json())
            .then((data) => setTodos(data))
            .catch(err => console.log(err));
    }, [input])

    function inOnchi(e) {
        upINpu(e.target.value);
    }

    function toggleAll() {
        const updatedTodos = todos.map(todo => ({
            ...todo,
            completed: !check
        }));
        setTodos(updatedTodos);
        upCheck(!check);
    }

    function toggleTodo(id) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    function clearCompleted() {
        const updatedTodos = todos.filter(todo => todo.completed);
        if (updatedTodos != []) {
            updatedTodos.forEach((ob) => {
                axios.post("http://localhost:4000/deletenote", { id: ob.id })
                    .catch(err => console.log(err))
            })

            upLoop((prev)=> prev + 1);
        }
    }

    // Function to filter todos using filter state
    function getFilteredTodos() {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }

    async function inpuOnEnter(e) {
        if (e.key == "Enter") {
            if (input !== "") {
                await axios.post("http://localhost:4000/todoCon", { inval: input })
                    .then(upINpu(""))
                    .catch((err) => console.log(err))
            }
        }
    }

    return (
        <div className="mainTab">
            <div className="todoCon">
                <div className="tiBtn">
                    <p>TODO LIST</p>
                    <button onClick={toggleAll}>Toggle All</button>
                </div>
                <hr />
                <div className="notes">
                    {getFilteredTodos().map((todo) => (
                        <Note key={todo.id} toggleTodo={toggleTodo} todo={todo} />
                    ))}
                </div>
            </div>
            <div>
                <input onChange={inOnchi} type="text" placeholder="Write some todo task here..." name="content" onKeyUp={inpuOnEnter} value={input} />
            </div>
            <div className="footer">
                <div className="buttonsRight">
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('completed')}>Active</button>
                </div>
                <div className="buttonsLeft">
                    <button>{todos.filter(todo => !todo.completed).length} left</button>
                    <button onClick={clearCompleted}>Clear Completed ({todos.filter(todo => todo.completed).length})</button>
                </div>
            </div>
        </div>
    );
}
