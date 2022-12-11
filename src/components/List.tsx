import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, markToDo } from "../store/reducers/toDoSlicer";
import IToDo from "../interfaces/IToDo";
import ToDo from "../helpers/ToDo";
import { ReduxState } from "../store";

export default function List(): JSX.Element {
  const toDos: ToDo[] = useSelector((state: ReduxState) => {
    return state;
  });

  const dispatch = useDispatch();

  return (
    <div className="list-container">
      <ul>
        {toDos.map((task: IToDo) => {
          return (
            <li id={task.id} key={task.id}>
              {task.text}{" "}
              <button onClick={() => dispatch(deleteToDo(task))}>
                Deletar
              </button>{" "}
              <button onClick={() => dispatch(markToDo(task))}>
                Finalizar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
