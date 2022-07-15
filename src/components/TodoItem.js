import React from "react";

function TodoItem(props) {    
    const item = props;
    return (
        <div className="m-1 card">
            <div className="card-body">
                {item.text}
            </div>
        </div>
    );
}

export default TodoItem;