import React from "react";
import ToDo from "./ToDo";

export default function List() {
  return (
    <div className="list-container">
      <ul>
        {ToDos.map((Tarefa: ToDo) => (
          <li id={Tarefa.id} key={Tarefa.id}>
            {" "}
            {Tarefa.text}
            <button onClick={() => deleteToDo(Tarefa)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
