import React from "react";
import {BsCheck} from "react-icons/bs";

const TodoItem = ({todoData}) => {
    return (
            <div>
                <BsCheck />
                {todoData.title}
            </div>
    )
}

export default TodoItem