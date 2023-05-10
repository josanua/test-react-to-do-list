import React from 'react'
import TodoItem from "./item/TodoItem";


const todosData = [
    {
        title: 'Todo Title',
        isCompleted: false,
        todoID: '_todo1'
    },
    {
        title: 'Todo Title 2',
        isCompleted: true,
        todoID: '_todo2'
    },
    {
        title: 'Todo Title 3 biggest to se what will happens' ,
        isCompleted: false,
        todoID: '_todo3'
    }
]
const Home = () => {
    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold">My first to-do list</h1>
            {
                todosData.map(todoItem => (
                    <TodoItem todoData={todoItem} key={todoItem.todoID} />
                ))
            }
        </div>
    )
}

export default Home