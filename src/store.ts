import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./store/reducers/toDoReducer";

const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export default store;
