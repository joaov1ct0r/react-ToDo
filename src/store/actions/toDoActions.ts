import ToDo from "../../helpers/ToDo";
import { addToDoType, deleteToDoType, markToDoType } from "./toDoActionsTypes";

export function addToDo(text: string) {
  const toDo: ToDo = new ToDo(text);

  return { type: addToDoType, payload: toDo };
}

export function deleteToDo(id: string) {
  return { type: deleteToDoType, payload: id };
}

export function markToDo(id: string) {
  return { type: markToDoType, payload: id };
}
