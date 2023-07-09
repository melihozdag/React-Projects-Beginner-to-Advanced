import React from "react";
import "./Home.css";
import { TopRatedMovies } from "./TopRatedMovies";

export const Home = () => {
  return (
    <div className="container home ps-5 pe-5 rounded d-flex flex-column justify-content-center">
      <h1 className="pt-3 popular_title">TOP RATED MOVIES</h1>
      <div className="justify_line mb-5"></div>
      <TopRatedMovies />
    </div>
  );
};
