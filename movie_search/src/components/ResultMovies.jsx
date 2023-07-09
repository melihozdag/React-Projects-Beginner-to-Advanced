import React, { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "../components/Movie";
import { useSelector } from "react-redux";

export const ResultMovies = () => {
  const [movies, setMovies] = useState([]);
  const [windowWith, setWindowWith] = useState(window.innerWidth);

  const search_movie = useSelector((state) => state.movie.value);

  useEffect(() => {
    const handleResize = () => {
      setWindowWith(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getRowClassName = () => {
    return windowWith <= 577 ? "d-flex overflow-x-scroll hide_scroll" : "row";
  };

  const getColClassName = () => {
    return windowWith <= 577
      ? "me-4 mb-5 pb-1"
      : "mb-5 col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${search_movie}&include_adult=false&api_key={YOUR API}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search_movie]);
  return (
    <div className={getRowClassName()}>
      {movies.map((movie) => (
        <div key={movie.id} className={getColClassName()}>
          <Movie
            overview={movie.overview}
            imageBackdrop={movie.backdrop_path}
            id={movie.id}
            imageURL={movie.poster_path}
            title={movie.original_title}
            date={movie.release_date}
            vote={movie.vote_average}
          />
        </div>
      ))}
    </div>
  );
};
