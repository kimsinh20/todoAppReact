import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos ",
  initialState: {
    allTodos: [
      {
        id: uuidv4(),
        title: "cưới vợ giàu",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "đi du lịch",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "mua nhà",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "chịch dạo",
        completed: true,
      },
    ],
  },

  reducers: {
    addTodo: (state, action) => {
      if (action.payload === "") return;
      state.allTodos.unshift({
        id: uuidv4(),
        title: action.payload,
        completed: false,
      });
    },
    tonggleLightThought: (state, action) => {
      const idTodo = action.payload;
      state.allTodos = state.allTodos.filter((job) => {
        if (idTodo === job.id) job.completed = !job.completed;
        return job;
      });
    },
    deleteTodo: (state, action) => {
      const idTodo = action.payload;
      state.allTodos = state.allTodos.filter((job) => job.id !== idTodo);
    },
    deleteAll: (state, action) => {
      state.allTodos = [];
    },
    deletePass: (state, action) => {
      state.allTodos = state.allTodos.filter((job) => !job.completed);
    },
    deleteUnPass: (state, action) => {
      state.allTodos = state.allTodos.filter((job) => job.completed);
    },
  },
});
const { actions, reducer } = todoSlice;
export const {
  addTodo,
  tonggleLightThought,
  deleteTodo,
  deleteAll,
  deletePass,
  deleteUnPass,
} = actions;
export default reducer;
