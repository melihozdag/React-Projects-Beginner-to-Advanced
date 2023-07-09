import React, { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setMovie } from "../redux/movieNameSlice";
import { SearchInput } from "./SearchInput";

export const Header = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (searchInput) => {
    dispatch(setMovie(searchInput));
    navigate("/result");
  };

  const handleMenuToggle = () => {
    setActive(!active);
  };

  const smallMenuStyle = {
    maxHeight: active ? "100vh" : "0",
    opacity: active ? 1 : 0,
    transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
    overflow: "hidden",
  };

  return (
    <div className="container-fluid pt-3 pb-3">
      <div className="nav_bar">
        <nav className="d-flex justify-content-between align-items-center p-2">
          <div>
            <NavLink to="/" className="text-decoration-none">
              <h3 className="title fw-bold ms-5">Movie Search App</h3>
            </NavLink>
          </div>
          <div className="deneme d-flex">
            <div className="d-flex justify-content-center align-items-center">
              <FaSearch className="text-white fw-bold fs-3 me-2 search_icon" />
              <SearchInput
                className="input_1"
                placeholder="Enter a movie name"
                onSearch={handleSearch}
              />
            </div>
            <div className="d-flex list-unstyled nav_links me-3">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/favorites">My Favorites</NavLink>
              </li>
              <li>
                <NavLink to="/popular">Popular</NavLink>
              </li>
              <li>
                <NavLink to="/upcoming">Upcoming</NavLink>
              </li>
            </div>
          </div>

          {!active ? (
            <CgMenu className="menu_icon" onClick={handleMenuToggle} />
          ) : (
            <ImCross className="menu_icon" onClick={handleMenuToggle} />
          )}
        </nav>
      </div>
      <div className="small_menu_container p-2" style={smallMenuStyle}>
        <div className="container-fluid small_menu me-3 mt-3 mb-3">
          <li>
            <NavLink to="/" onClick={() => setActive(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" onClick={() => setActive(false)}>
              My Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="/popular" onClick={() => setActive(false)}>
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink to="/upcoming" onClick={() => setActive(false)}>
              Upcoming
            </NavLink>
          </li>
          <li>
            <SearchInput
              placeholder="Enter a movie name"
              onSearch={handleSearch}
            />
          </li>
        </div>
      </div>
    </div>
  );
};
