import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RemoveFavMovie } from "./RemoveFavMovie";

export const FavoriteMovies = () => {
  const favs = useSelector((state) => state.favorites.value);
  const [windowWith, setWindowWith] = useState(window.innerWidth);

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

  return (
    <div className={getRowClassName()}>
      {favs.map((movie, id) => (
        <div key={id} className={getColClassName()}>
          <RemoveFavMovie
            overview={movie.overview}
            imageBackdrop={movie.imageBackdrop}
            id={movie.id}
            imageURL={movie.imageURL}
            title={movie.title}
            date={movie.date}
            vote={movie.vote}
          />
        </div>
      ))}
    </div>
  );
};
