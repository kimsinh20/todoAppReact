import React from "react";
import { useDispatch } from "react-redux";
// import PropTypes from "prop-types";
import { deleteAll, deleteUnPass, deletePass } from "../todosSlice/todoSlice";

function BtnGroup(props) {
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  const handleDelete_pass = () => {
    dispatch(deletePass());
  };
  const handleDelete_unpass = () => {
    dispatch(deleteUnPass());
  };
  return (
    <div className='group'>
      <button className='btn' onClick={handleDeleteAll}>
        clear All
      </button>
      <button className='btn' onClick={handleDelete_pass}>
        delete line-though
      </button>
      <button className='btn' onClick={handleDelete_unpass}>
        delete unline-though
      </button>
    </div>
  );
}

BtnGroup.propTypes = {};

export default BtnGroup;
