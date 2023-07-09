import React from "react";
import "./Movie.css";
import { AiTwotoneStar } from "react-icons/ai";
import { removeFromFavorites } from "../redux/favoritesSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const RemoveFavMovie = ({ imageURL, title, vote, date, id }) => {
  const dispatch = useDispatch();
  const fixedVote = vote.toFixed(1);
  const navigate = useNavigate();

  const handleRemoveClick = () => {
    dispatch(removeFromFavorites(id));
  };

  const handleMovieClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie_container rounded">
      <div className="image_container position-relative">
        <img
          className="poster_image"
          src={`https://image.tmdb.org/t/p/original/${imageURL}`}
          alt="Movie"
        />
        <div className="button_container">
          <button
            className="favorite_button rounded text-white p-1 fw-bold"
            onClick={handleRemoveClick}
          >
            Favorilerden Çıkar
          </button>
        </div>
      </div>

      <h3 onClick={handleMovieClick} className="bg-light movie_title">
        {title}
      </h3>
      <div className="d-flex justify-content-between">
        <div className="ms-2">
          <p className="fw-bold text-white fs-5 release_date">Vizyon Tarihi:</p>
          <p className="fw-bold text-white">{date}</p>
        </div>
        <div className="line"></div>
        <div className="d-flex justify-content-center align-items-center me-2">
          <AiTwotoneStar className="star_icon fs-4 me-1" />
          <p className="vote mt-3 fw-bold text-white fs-5"> {fixedVote}</p>
        </div>
      </div>
    </div>
  );
};
