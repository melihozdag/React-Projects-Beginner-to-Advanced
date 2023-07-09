import { configureStore } from "@reduxjs/toolkit";
import movieNameReducer from "./movieNameSlice";
import favoritesReducer from "./favoritesSlice";
import movieInfoReducer from "./movieInfoSlice";

export const store = configureStore({
  reducer: {
    movie: movieNameReducer,
    favorites: favoritesReducer,
    movieInfo: movieInfoReducer,
  },
});
