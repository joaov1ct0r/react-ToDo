import { configureStore } from "@reduxjs/toolkit";
import toDoSlicer from "./store/reducers/toDoSlicer";

const store = configureStore({
  reducer: toDoSlicer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type ReduxState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
