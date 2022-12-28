import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, markToDo } from "../store/reducers/toDoSlicer";
import ToDo from "../helpers/ToDo";
import { ReduxState, AppDispatch } from "../store";

export default function List(): JSX.Element {
  const toDos: ToDo[] = useSelector((state: ReduxState) => {
    return state;
  });

  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="list-container">
      <ul
        style={{
          listStyle: "none",
          paddingTop: "5%",
        }}
      >
        {toDos.map((task: ToDo) => {
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
