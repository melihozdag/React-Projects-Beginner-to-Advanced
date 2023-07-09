import React from "react";
import { useSelector } from "react-redux";
import { AiTwotoneStar } from "react-icons/ai";

export const MovieDetails = () => {
  const movieInfo = useSelector((state) => state.movieInfo.value);

  return (
    <div className="container home favorite_movies ps-5 pe-5 rounded ">
      <h1 className="pt-3 popular_title">{movieInfo.title}</h1>
      <div className="justify_line mb-5"></div>
      <div>
        <img
          className="rounded"
          width={"100%"}
          src={`https://image.tmdb.org/t/p/original/${movieInfo.imageBackdrop}`}
          alt="Backdrop Bulunamadı"
        />
        <p className="text-white fw-bold mt-3 fs-4">{movieInfo.overview}</p>
        <div className="justify_line mb-3"></div>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <p className="text-white fw-bold fs-4">
            Release Date: {movieInfo.date}
          </p>
          <div className="d-flex align-items-center">
            <AiTwotoneStar className="star_icon fs-4 me-1" />
            <p className="fw-bold text-white fs-5 mt-3">{movieInfo.vote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
