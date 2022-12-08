import { configureStore } from "@reduxjs/toolkit";
import toDoSlicer from "./store/reducers/toDoSlicer";

const store = configureStore({
  reducer: {
    toDo: toDoSlicer,
  },
});

export default store;
