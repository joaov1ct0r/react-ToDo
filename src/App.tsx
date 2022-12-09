import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import { Provider } from "react-redux";
import store from "./store";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Provider store={store}>
        <Form></Form>
        <List></List>
      </Provider>
    </div>
  );
}
