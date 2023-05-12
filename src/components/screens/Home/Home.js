import React, {useState} from 'react'
import TodoItem from "./item/TodoItem";

const todosData = [
    {
        title: 'Todo Title',
        isCompleted: false,
        todoID: '_todo1'
    },
    {
        title: 'Todo Title 2',
        isCompleted: false,
        todoID: '_todo2'
    },
    {
        title: 'Todo Title 3 biggest to se what will happens' ,
        isCompleted: false,
        todoID: '_todo3'
    }
]
const Home = () => {
    const [todos, setTodos] = useState(todosData);

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t.todoID === id)
        current.isCompleted = !current.isCompleted;
        setTodos(copy)
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold text-center mb-3">My first to-do list</h1>
            {
                todosData.map(todoItem => (
                    <TodoItem todoData={todoItem} key={todoItem.todoID} changeTodo = {changeTodo} />
                ))
            }
        </div>
    )
}

export default Home