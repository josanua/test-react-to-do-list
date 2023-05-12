import Check from "./Check";
import {BsTrash} from "react-icons/bs";
const TodoItem = ({todoData, changeTodo, removeTodo}) => {

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
            <button
                className="flex items-center"
                onClick={() => changeTodo(todoData.todoID)}
            >
                    <Check isCompleted = {todoData.isCompleted} />
                    <span className= {` ${todoData.isCompleted ? 'line-through' : '' } `}>
                        {todoData.title}
                    </span>
            </button>
            <button onClick={() => removeTodo(todoData.todoID)}>
                <BsTrash size={22} className="text-gray-600 hover:text-red-700 transition-colors easy-in-out duration-300 mx-1"/>
            </button>
        </div>
    )
}

export default TodoItem