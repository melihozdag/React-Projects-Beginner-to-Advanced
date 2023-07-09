import React from "react";
import { FavoriteMovies } from "../components/FavoriteMovies";

export const Favorites = () => {
  return (
    <div className="container home favorite_movies ps-5 pe-5 rounded ">
      <h1 className="pt-3 popular_title">FAVORITE MOVIES</h1>
      <div className="justify_line mb-5"></div>
      <FavoriteMovies />
    </div>
  );
};
