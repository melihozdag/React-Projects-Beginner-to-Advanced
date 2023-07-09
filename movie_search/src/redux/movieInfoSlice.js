import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState,
  reducers: {
    setMovieInfo(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setMovieInfo } = movieInfoSlice.actions;

export default movieInfoSlice.reducer;
