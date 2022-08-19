import React from "react";
// import PropTypes from "prop-types";
function AddTodo(props) {
  return (
    <div>
      <form action='' className='add'>
        <input
          type='text'
          name='title'
          placeholder='add todoo'
          className='textAdd'
          value=''
        />
        <input type='submit' value='add' className='submitAdd' />
      </form>
    </div>
  );
}
AddTodo.propTypes = {};
export default AddTodo;
