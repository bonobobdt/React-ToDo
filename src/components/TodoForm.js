import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

import '../App.css';

function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleInputChange(e) {
        setTodo({
            ...todo,
            task: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({
                ...todo, 
                id: uuid() 
            });

            setTodo({
                ...todo,
                task: ''
            });
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-input"
                name="task"
                type="text"
                placeholder="Adicione tarefa"
                value={todo.task}
                onChange={handleInputChange}    
            />
            <button className="todo-button" type="submit">+</button>
        </form>
    );
}

export default TodoForm;