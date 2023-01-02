import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDo from "../../helpers/ToDo";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: [] as ToDo[],
  reducers: {
    createToDo: {
      reducer: (state: ToDo[], action: PayloadAction<ToDo>) => {
        return state.concat(action.payload);
      },

      prepare: (text: string) => {
        const toDo: ToDo = new ToDo(text);

        return { payload: toDo };
      },
    },

    deleteToDo: {
      reducer: (state: ToDo[], action: PayloadAction<ToDo>) => {
        return state.filter((toDo: ToDo) => toDo.id !== action.payload.id);
      },

      prepare: (task: ToDo) => {
        return { payload: task };
      },
    },

    markToDo: {
      reducer: (state: ToDo[], action: PayloadAction<ToDo>) => {
        return state.map((task: ToDo) => {
          if (task.id === action.payload.id) {
            task.done = !task.done;
          }

          return task;
        });
      },

      prepare: (task: ToDo) => {
        return { payload: task };
      },
    },
  },
});

export const { createToDo, deleteToDo, markToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
