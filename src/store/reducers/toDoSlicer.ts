import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ToDo from "../../helpers/ToDo";
import IToDo from "../../interfaces/IToDo";

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: [] as ToDo[],
  reducers: {
    createToDo: {
      reducer: (state: ToDo[], action: PayloadAction<ToDo>) => {
        state.push(action.payload);
      },

      prepare: (text: string) => {
        const toDo: ToDo = new ToDo(text);

        return { payload: toDo };
      },
    },

    deleteToDo: {
      reducer: (state: ToDo[], action: PayloadAction<ToDo>) => {
        state.filter((task: IToDo) => task.id !== action.payload.id);
      },

      prepare: (task: ToDo) => {
        return { payload: task };
      },
    },

    markToDo: {
      reducer: (state: ToDo[], action: PayloadAction<ToDo>) => {
        state.map((task: IToDo) => {
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
