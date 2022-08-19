import todoSlice from "../todosSlice/todoSlice";

const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {
  myTodos: todoSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
