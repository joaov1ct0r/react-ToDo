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
            <li
              style={{
                display: "inline-block",
                textAlign: "left",
                color: "white",
                borderBottom: "2px solid rgb(138, 159, 181)",
                width: "80%",
                marginBottom: "5%",
              }}
              id={task.id}
              key={task.id}
            >
              {task.text}{" "}
              <button
                style={{
                  height: "25px",
                  padding: "2px",
                  float: "right",
                  marginLeft: "2%",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(deleteToDo(task))}
              >
                Deletar
              </button>{" "}
              <button
                style={{
                  height: "25px",
                  padding: "2px",
                  float: "right",
                  marginLeft: "2%",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => dispatch(markToDo(task))}
              >
                Finalizar
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
