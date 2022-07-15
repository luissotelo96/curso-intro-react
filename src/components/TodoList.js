import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {

    return (   
        <div className="TodoList">
            {todos.map(x => <TodoItem key = {x.id} {...x} />)}
        </div>            
    );
}

export default TodoList;