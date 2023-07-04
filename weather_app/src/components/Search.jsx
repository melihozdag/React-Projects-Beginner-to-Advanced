import React, { useState } from "react";
import "./Search.css";
import { Input } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { currentWeatherData } from "../api/currentWeatherAPI";
import { useDispatch } from "react-redux";
import { setWeatherData } from "../redux/weatherSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await currentWeatherData(search);
        console.log(data);
        dispatch(setWeatherData(data));
      } catch (error) {
        console.error("Error while fetching weather data: ", error);
      }
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center search">
      <div className="search_container">
        <Input
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          type="search"
          className="search_input"
          placeholder="Enter a city name"
        />
        {!search && <AiOutlineSearch className="search_icon" />}
      </div>
    </div>
  );
};
