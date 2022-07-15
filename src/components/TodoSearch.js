import React from "react";
import { BsSearch } from 'react-icons/bs';

function TodoSearch() {
    return (
        <form className="text-center">
            <div class="row justify-content-center">
                <div className="mb-3">
                    <input type="text" className="w-25 d-inline form-control" id="todoSearchInput" placeholder="Type your task" />
                    <button type="button" className="mx-1 d-inline btn btn-primary"><BsSearch /></button>
                </div>
            </div>
        </form>
    );
}

export default TodoSearch;