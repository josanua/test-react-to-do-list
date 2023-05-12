import Check from "./Check";
const TodoItem = ({todoData, changeTodo}) => {

    return (
        <button className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
            onClick={() => changeTodo(todoData.todoID)}
        >
            <Check isCompleted = {todoData.isCompleted} />
            <span className= {` ${todoData.isCompleted ? 'line-through' : '' } `}>
                {todoData.title}
            </span>
        </button>
    )
}

export default TodoItem