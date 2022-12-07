import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./reducers/ToDoReducer";
import { Provider } from "react-redux";

export default function App(): JSX.Element {
  const store = configureStore({
    reducer: {
      toDo: toDoReducer,
    },
  });

  return (
    <div className="App">
      <Provider store={store}>
        <Form></Form>

        <List></List>
      </Provider>
    </div>
  );
}
