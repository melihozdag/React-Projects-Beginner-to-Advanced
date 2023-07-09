import React from "react";
import { ResultMovies } from "../components/ResultMovies";
import { useSelector } from "react-redux";

export const Result = () => {
  const movie = useSelector((state) => state.movie.value);
  return (
    <div className="container home ps-5 pe-5 rounded d-flex flex-column justify-content-center">
      <h1 className="pt-3 popular_title">{movie.toUpperCase()} MOVIES</h1>
      <div className="justify_line mb-5"></div>
      <ResultMovies />
    </div>
  );
};
