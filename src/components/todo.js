import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
function Todo(props) {
  const todo = props.work;
  const completedCheck = props.isCompletedFunc;
  const deleteTodo = props.deleteTodofunc;
  const styleText = {
    textDecoration: props.work.completed ? "line-through" : "none",
  };
  return (
    <p className='todoItem'>
      <input
        type='checkbox'
        onChange={completedCheck.bind(this, todo.id)}
        checked={todo.competed}
        className='checked'
      />
      <span
        style={styleText}
        onDoubleClick={completedCheck.bind(this, todo.id)}
      >
        {" "}
        {todo.title}
      </span>
      <button className='btn_delete' onClick={deleteTodo.bind(this, todo.id)}>
        delete
        <FaTrashAlt />
      </button>
    </p>
  );
}
Todo.propTypes = {
  work: PropTypes.object.isRequired,
  isCompletedFunc: PropTypes.func.isRequired,
  deleteTodofunc: PropTypes.func.isRequired,
};
export default Todo;
