import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const movieNameSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setMovie } = movieNameSlice.actions;

export default movieNameSlice.reducer;
