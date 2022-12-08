import { AnyAction } from "redux";
import IToDo from "./IToDo";

export default interface IToDoAction extends AnyAction {
  type: string;
  payload: IToDo;
}
