import ToDo from "../../helpers/ToDo";
import { addToDoType, deleteToDoType, markToDoType } from "./toDoActionsTypes";
import IToDoAction from "../../interfaces/IToDoAction";
import IToDo from "../../interfaces/IToDo";

export function addToDo(text: string): IToDoAction {
  const toDo: ToDo = new ToDo(text);

  return { type: addToDoType, payload: toDo };
}

export function deleteToDo(task: IToDo): IToDoAction {
  return { type: deleteToDoType, payload: task };
}

export function markToDo(task: IToDo): IToDoAction {
  return { type: markToDoType, payload: task };
}
