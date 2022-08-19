import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, tonggleLightThought } from "../todosSlice/todoSlice";
function Todo({ work }) {
  const todo = work;
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos.allTodos);
  const tonggle_Linght_Thought = (idTodo) => {
    dispatch(tonggleLightThought(idTodo));
  };
  const deleteTodoList = (idTodo) => {
    dispatch(deleteTodo(idTodo));
  };
  return (
    <p className="todoItem">
      <input
        type="checkbox"
        checked={todo.completed}
        className="checked"
        onChange={tonggle_Linght_Thought.bind(this, todo.id)}
      />
      <span
        className={todo.completed ? "light" : ""}
        onDoubleClick={tonggle_Linght_Thought.bind(this, todo.id)}
      >
        {" "}
        {todo.title}
      </span>
      <button
        className="btn_delete"
        onClick={deleteTodoList.bind(this, todo.id)}
      >
        delete
        <FaTrashAlt />
      </button>
    </p>
  );
}
Todo.propTypes = {
  work: PropTypes.object.isRequired,
};
export default Todo;
