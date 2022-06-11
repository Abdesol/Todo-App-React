import CustomPopup from '../components/CustomPopup';
import PropTypes from "prop-types";

/*
A layout for adding a todo
*/
const AddTodo = ({show, handleShow}) => {
    return (
        <CustomPopup
            onClose={() => handleShow(false)}
            show={show}
            title="Add todo">
            <h3>Add your todo here</h3>
      </CustomPopup>
    )
}

AddTodo.propTypes = {
    show: PropTypes.bool.isRequired,
    handleShow: PropTypes.func.isRequired
  };

export default AddTodo;