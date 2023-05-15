import React, {useState} from 'react'
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import data from "../../../data";

// Home component
const Home = () => {

    const [todos, setTodos] = useState(data);
    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t.todoID === id)
        current.isCompleted = !current.isCompleted;
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos([...todos].filter(n => n.todoID !== id))
    }

    const addTodo = (title) => {
        setTodos([
            {
                todoID: new Date(), // to lazy to create func for Id iteration, just created a random id
                title,
                isCompleted: false
            },
            ...todos])
    }

    // For testing purposes
    // window.addTodo = addTodo;

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold text-center mb-3">My first to-do list</h1>
            {
                todos.map(todoItem => (
                    <TodoItem
                        key={todoItem.todoID}
                        todoData={todoItem}
                        changeTodo={changeTodo}
                        removeTodo={removeTodo}
                    />
                ))
            }
            <CreateTodoField addTodo = {addTodo}/>
        </div>
    )
}

export default Home