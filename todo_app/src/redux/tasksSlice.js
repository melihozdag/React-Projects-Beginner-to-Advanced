import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.name,
        description: action.payload.description,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
