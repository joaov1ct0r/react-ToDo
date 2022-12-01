import IToDo from "../interfaces/IToDo";
import generateId from "./generateId";

export default class ToDo implements IToDo {
  public readonly id: string;
  public readonly text: string;

  constructor(text: string) {
    this.id = generateId();
    this.text = text;
  }
}
