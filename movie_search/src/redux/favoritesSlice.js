import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      state.value.push(movie);
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.value = state.value.filter((movie) => movie.id !== movieId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
