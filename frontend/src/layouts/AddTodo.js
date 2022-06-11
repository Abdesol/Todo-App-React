import CustomPopup from '../components/CustomPopup';
import PropTypes from "prop-types";
import { useState } from 'react';

/*
A layout for adding a todo
*/
const AddTodo = ({show, handleShow, addTodo}) => {
    const [title, setTitle] = useState(''); 

    return (
        <CustomPopup
            className="popup"
            onClose={() => handleShow(false)}
            show={show}
            title="Add todo">
            <h3>Title</h3>
			<input className='text-box' 
				type="text" 
				placeholder='Title'
				required
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				></input>
			<button className='button'
					onClick={() => {
					if(title.length > 0) {
						addTodo(title);
						setTitle('');
						handleShow(false);
					}
					}}>
			Save
			</button>
      </CustomPopup>
    )
}

AddTodo.propTypes = {
    show: PropTypes.bool.isRequired,
    handleShow: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
  };

export default AddTodo;