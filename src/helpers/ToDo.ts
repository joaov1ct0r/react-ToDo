import IToDo from "../interfaces/IToDo";
import generateId from "./generateId";

export default class ToDo implements IToDo {
  public id: string;
  public text: string;
  public done: boolean;

  constructor(text: string) {
    this.id = generateId();
    this.text = text;
    this.done = false;
  }
}
