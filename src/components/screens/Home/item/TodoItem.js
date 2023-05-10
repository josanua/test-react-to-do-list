import Check from "./Check";
const TodoItem = ({todoData}) => {
    return (
        <div>
            <Check/>
            {todoData.title}
        </div>
    )
}

export default TodoItem