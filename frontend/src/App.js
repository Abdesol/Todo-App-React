import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import "./assets/styles/index.css"
import Navbar from './layouts/Navbar';
import AddTodo from './layouts/AddTodo';
import { Fragment, useState } from 'react';

function App() {
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

  const [showAddTodo, setShowAddTodo] = useState(false);

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

  const isShowAddTodo = (show) => {
      setShowAddTodo(show);
  }

  return (
    <Router>
      <Fragment className="App">
        <AddTodo className="popup" show={showAddTodo} handleShow={isShowAddTodo}/>
        <Navbar/>
        <div className="content">
            <Routes>
              <Route path='/' element={ 
                <Home todos={todos} 
                      handleIsDone={handleIsDone}  
                      handleDelete={handleDelete} 
                      isShowAddTodo={isShowAddTodo}/> 
                }/>
            </Routes>
          </div>
      </Fragment>
    </Router>
  );
}

export default App;
