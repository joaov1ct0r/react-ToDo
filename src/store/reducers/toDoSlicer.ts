import { createSlice } from "@reduxjs/toolkit";
import IToDo from "../../interfaces/IToDo";
import IToDoAction from "../../interfaces/IToDoAction";
import IToDoState from "../../interfaces/IToDoState";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    toDo: [],
  },
  reducers: {
    createToDo: (state: IToDoState, action: IToDoAction) => {
      state.toDo.push(action.payload);
    },

    deleteToDo: (state: IToDoState, action: IToDoAction) => {
      state.toDo.filter((task: IToDo) => task.id !== action.payload.id);
    },

    markToDo: (state: IToDoState, action) => {
      state.toDo.map((task: IToDo) => {
        if (task.id === action.payload.id) {
          task.done = !task.done;
        }

        return task;
      });
    },
  },
});

export const { createToDo, deleteToDo, markToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
