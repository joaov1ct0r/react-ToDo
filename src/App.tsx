import React from "react";
import List from "./components/List";
import Form from "./components/Form";

export default function App(): JSX.Element {
  return (
    <div
      className="App"
      style={{
        display: "block",
        margin: "auto",
        marginTop: "5%",
        maxWidth: "400px",
        height: "500px",
        textAlign: "center",
        backgroundColor: "slategray",
        borderRadius: "5px",
        overflowY: "scroll",
      }}
    >
      <Form></Form>
      <List></List>
    </div>
  );
}
