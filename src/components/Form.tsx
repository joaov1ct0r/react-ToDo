import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { createToDo } from "../store/reducers/toDoSlicer";

export default function Form(): JSX.Element {
  const [Text, setText] = useState<string | null>(null);

  const dispatch: AppDispatch = useDispatch();

  function handleText(event: React.ChangeEvent<HTMLInputElement>): void {
    const text: string = event.target.value;

    setText(text);
  }

  function handleClick(e: React.MouseEvent) {
    if (Text) {
      e.preventDefault();

      dispatch(createToDo(Text));

      setText("");
    }
  }

  return (
    <div className="form-container">
      <h1
        style={{
          paddingTop: "5%",
          marginBottom: "5%",
          color: "white",
        }}
      >
        To Do List
      </h1>

      <form>
        <input
          onChange={handleText}
          type="text"
          placeholder="Nova tarefa"
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          value={Text || ""}
          style={{
            width: "250px",
            height: "25px",
            outline: "none",
            border: "none",
            backgroundColor: "rgb(62, 70, 80)",
            color: "white",
          }}
        />

        <button
          onClick={handleClick}
          type="submit"
          style={{
            height: "25px",
            padding: "2px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
