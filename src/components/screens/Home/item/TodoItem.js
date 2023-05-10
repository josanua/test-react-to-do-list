import Check from "./Check";
const TodoItem = ({todoData}) => {
    return (
        <div className="flex items-center mb-4 rounded-2xl bg-gray-800 p-5 w-full">
            <Check/>
            {todoData.title}
        </div>
    )
}

export default TodoItem