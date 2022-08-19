import React, { useState } from "react";
import Todo from "./todo";
import AddTodo from "./addTodo";
import { v4 as uuidv4 } from "uuid";
import BtnGroup from "./BtnGroup";
const Todos = () => {
  const [job, setJob] = useState([
    
  ]);

  // loght thouth

  const isCompleted = (id) => {
    const newTodos = job.map((job) => {
      if (id === job.id) job.completed = !job.completed;
      return job;
    });
    setJob(newTodos);
  };

  // delete todo

  const deleteTodo = (id) => {
    const newTodos = job.filter((job) => job.id !== id);
    setJob(newTodos);
  };
  const deleteAll = () => {
    setJob([]);
  };
  //add todo
  const deleteLineThough = () => {
    const newTodos = job.filter((job) => !job.completed);
    setJob(newTodos);
  };
  const deleteNotLineThough = () => {
    const newTodos = job.filter((job) => job.completed);
    setJob(newTodos);
  };
  const addTodo = (title) => {
    const newTodos = [
      ...job,
      {
        id: uuidv4(),
        title,
        competed: false,
      },
    ];
    setJob(newTodos);
  };
  return (
    <>
      <AddTodo addTodoFunc={addTodo} />
      {job.map((job, i) => {
        return (
          <Todo
            key={i}
            work={job}
            isCompletedFunc={isCompleted}
            deleteTodofunc={deleteTodo}
          />
        );
      })}
      <BtnGroup
        deleteAllFunc={deleteAll}
        deleteLineThoughFunc={deleteLineThough}
        deleteNotLineThoughFunc={deleteNotLineThough}
      />
    </>
  );
};
export default Todos;
