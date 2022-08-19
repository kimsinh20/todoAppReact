import React from "react";
// import Todo from "./todo";
// import AddTodo from "./addTodo";
// import { v4 as uuidv4 } from "uuid";
import AddTodo from "./addtodo";
import BtnGroup from "./btngroup";
import Todo from "./todo";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.myTodos.allTodos);
  return (
    <>
      <AddTodo />
      {todos.map((job, i) => {
        return <Todo key={i} work={job} />;
      })}
      <BtnGroup />
    </>
  );
};
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
