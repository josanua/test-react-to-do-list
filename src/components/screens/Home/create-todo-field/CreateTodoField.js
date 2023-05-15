import {useState} from "react";

const CreateTodoField = ({addTodo}) => {
    const [title, setTitle] = useState('')

    console.log(title);

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={e => e.key === 'Enter' && addTodo(title)}
            />
        </div>
    )
}

export default CreateTodoField;