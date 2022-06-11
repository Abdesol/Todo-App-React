import '../assets/styles/TodoList.css';
import '../assets/styles/index.css';
import { MdDelete } from "react-icons/md"
import { useEffect, useState } from 'react';


const TodoList = ({todos, handleIsDone, handleDelete}) => {

    return ( 
        <div className="todo-list">
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <input className='todo check-box' 
                            type="checkbox" 
                            defaultChecked={todo.isDone}
                            onChange={() => handleIsDone(todo)}/>
                    <h2 className='todo'>{ todo.title }</h2>
                    <button className='todo icon-button' onClick={() => handleDelete(todo)}>
                        <MdDelete size="20" style={
                            {
                                marginBottom: -3
                            }
                        }/>
                    </button>
                </div>
            ))}
        </div>
     );
}
 
export default TodoList;