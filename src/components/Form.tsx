import React, { useState } from "react";

export default function Form(): JSX.Element {
  const [Text, setText] = useState<string | null>(null);

  function handleText(event: React.ChangeEvent<HTMLInputElement>): void {
    const text = event.target.value;

    setText(text);
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (Text) {
      addToDo(Text);
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
          value={Text!}
        />

        <button onClick={handleClick} type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}
