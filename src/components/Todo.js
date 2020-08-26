import React from 'react';

import '../App.css';

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return(
        <div className="todo-list">
         <input 
                className="todo-checkbox"
                type="checkbox"
                onClick={handleCheckboxClick} />
           
                <li
                    style={{
                        textDecoration: todo.completed ? 'line-through' : null
                    }} >
                    {todo.task}
                </li>
            <button className="todo-remove" onClick={handleRemoveClick}>remover</button>
        </div>
    );
}

export default Todo;