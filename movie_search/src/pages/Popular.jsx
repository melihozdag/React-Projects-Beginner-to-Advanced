import React from "react";
import { PopularMovies } from "../components/PopularMovies";

export const Popular = () => {
  return (
    <div className="container home ps-5 pe-5 rounded d-flex flex-column justify-content-center">
      <h1 className="pt-3 popular_title">POPULAR MOVIES</h1>
      <div className="justify_line mb-5"></div>
      <PopularMovies />
    </div>
  );
};
