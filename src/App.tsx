import React from "react";
import List from "./components/List";
import Form from "./components/Form";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Form></Form>
      <List></List>
    </div>
  );
}
