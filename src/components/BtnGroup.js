import React from "react";
import PropTypes from "prop-types";

function BtnGroup(props) {
  const deleteAll = props.deleteAllFunc;
  const deleteLineThough = props.deleteLineThoughFunc;
  const deleteNotLineThough = props.deleteNotLineThoughFunc;
  return (
    <div className='group'>
      <button className='btn' onClick={deleteAll}>
        clear All
      </button>
      <button className='btn' onClick={deleteLineThough}>
        delete line-though
      </button>
      <button className='btn' onClick={deleteNotLineThough}>
        delete unline-though
      </button>
    </div>
  );
}

BtnGroup.propTypes = {
  deleteAllFunc: PropTypes.func.isRequired,
  deleteLineThoughFunc: PropTypes.func.isRequired,
  deleteNotLineThoughFunc: PropTypes.func.isRequired,
};

export default BtnGroup;
