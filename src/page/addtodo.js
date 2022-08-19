import React, { useState } from "react";
// import PropTypes from "prop-types";
import { addTodo } from "../todosSlice/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const handleValueInput = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();
  const addSingleTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div>
      <form action='' className='add' onSubmit={addSingleTodo}>
        <input
          type='text'
          name='title'
          placeholder='add todo'
          className='textAdd'
          value={title}
          onChange={handleValueInput}
        />
        <input type='submit' value='add' className='submitAdd' />
      </form>
    </div>
  );
}
AddTodo.propTypes = {};
export default AddTodo;
