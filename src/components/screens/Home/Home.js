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
        <div className='bg-gray-900 h-screen text-white w-4/5 mx-auto'>
            {
                todosData.map(todoItem => (
                    <TodoItem todoData={todoItem} key={todoItem.todoID} />
                ))
            }
        </div>
    )
}

export default Home