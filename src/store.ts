import { configureStore } from "@reduxjs/toolkit";
import toDoSlicer from "./store/reducers/toDoSlicer";

const store = configureStore({
  reducer: toDoSlicer,
});

export type ReduxState = ReturnType<typeof store.getState>;

export default store;
