import React from "react";
import ToDo from "../helpers/ToDo";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, markToDo } from "../store/actions/toDoActions";
import IToDoState from "../interfaces/IToDoState";

export default function List(): JSX.Element {
  const toDos: ToDo[] = useSelector((state: IToDoState) => {
    return state.toDo;
  });

  const dispatch = useDispatch();

  return (
    <div className="list-container">
      <ul>
        {toDos.map((Tarefa: ToDo) => (
          <li id={Tarefa.id} key={Tarefa.id}>
            {" "}
            {Tarefa.text}
            <button onClick={() => dispatch(deleteToDo(Tarefa))}>
              Deletar
            </button>{" "}
            <button onClick={() => dispatch(markToDo(Tarefa))}>
              Finalizar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
