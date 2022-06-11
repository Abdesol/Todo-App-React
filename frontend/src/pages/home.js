import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AddTodo from "../layouts/AddTodo";
import TodoList from "../layouts/TodoList";
import PropTypes from "prop-types";

const Home = ({todos, handleIsDone, handleDelete, isShowAddTodo}) => {

    return ( 
        <div>
            <TodoList todos={todos} handleIsDone={handleIsDone} handleDelete={handleDelete}/>
            <button className="button" onClick={ () => isShowAddTodo(true) }>Add todo</button>
        </div> 
    );
}

Home.propTypes = {
    todos: PropTypes.array.isRequired,
    handleIsDone: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    isShowAddTodo: PropTypes.func.isRequired
  };

export default Home;