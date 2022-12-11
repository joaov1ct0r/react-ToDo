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
      <h1>To Do List</h1>

      <form>
        <input
          onChange={handleText}
          type="text"
          placeholder="Nova tarefa"
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          value={Text || ""}
        />

        <button onClick={handleClick} type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}
