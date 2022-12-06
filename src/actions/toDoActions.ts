import ToDo from "../helpers/ToDo";

export function addToDo(text: string) {
  const toDo: ToDo = new ToDo(text);

  return { type: "ADD_TO_DO", payload: toDo };
}

export function deleteToDo(id: string) {
  return { type: "DELETE_TO_DO", payload: id };
}

export function markToDo(id: string) {
  return { type: "MARK_TO_DO", payload: id };
}
