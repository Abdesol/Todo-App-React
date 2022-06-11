import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import TodoList from "../layouts/TodoList";


const Home = () => {
    const [todos, setTodos] = useState([
        {
            id:1,
            title:"Do chores",
            isDone:false
        },
        {
            id:2,
            title:"Do Homework",
            isDone:false
        },
        {
            id:3,
            title:"Learn react very well",
            isDone:true
        },
        {
            id:4,
            title:"Learn next after that",
            isDone:true
        },
        {
            id:5,
            title:"Sleep",
            isDone:true
        }
    ]);

    const handleIsDone = (todo) => {
        var todos_copy = todos;
        var index = todos_copy.indexOf(todo);
        todo.isDone = !todo.isDone;
        todos_copy[index] = todo;
        setTodos(todos_copy);
    }

    const handleDelete = (todo) => {
        var todos_copy = todos.filter(t => t.id !== todo.id);
        setTodos(todos_copy);
    }

    return ( 
    <div>
        <TodoList todos={todos} handleIsDone={handleIsDone} handleDelete={handleDelete}/>
    </div> );
}
 
export default Home;