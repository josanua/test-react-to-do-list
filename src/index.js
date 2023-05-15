import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./components/screens/Home/Home";
import Layout from "./components/layout/Layout";

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
        title: 'Todo Title 3 biggest to se what will happens',
        isCompleted: false,
        todoID: '_todo3'
    }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Layout>
        <Home todosData = {todosData}/>
      </Layout>
  </React.StrictMode>
);
