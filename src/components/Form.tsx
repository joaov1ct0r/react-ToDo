import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions/toDoActions";

export default function Form(): JSX.Element {
  const [Text, setText] = useState<string | null>(null);

  const dispatch = useDispatch();

  function handleText(event: React.ChangeEvent<HTMLInputElement>): void {
    const text: string = event.target.value;

    setText(text);
  }

  function handleClick() {
    if (Text) {
      dispatch(addToDo(Text));
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
          value={Text || ""}
        />

        <button onClick={handleClick} type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}
