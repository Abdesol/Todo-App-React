import '../assets/styles/TodoList.css';
import '../assets/styles/index.css';
import { MdDelete } from "react-icons/md"
import { useState } from 'react';


const TodoList = ({todos}) => {

    return ( 
        <div className="todo-list">
            {todos.map((todo) => (
                <div className="todo-preview" key={todo.id}>
                    <input className='todo check-box' 
                            type="checkbox" 
                            checked={todo.isDone}/>
                    <h2 className='todo'>{ todo.title }</h2>
                    <button className='todo icon-button'>
                        <MdDelete size="20" style={
                            {
                                marginBottom: -4
                            }
                        }/>
                    </button>
                </div>
            ))}
        </div>
     );
}
 
export default TodoList;