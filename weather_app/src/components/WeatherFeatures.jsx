import React from "react";
import { useSelector } from "react-redux";
import "./WeatherFeatures.css";

export const WeatherFeatures = () => {
  const weatherData = useSelector((state) => state.weather.weatherData);

  if (!weatherData) {
    return (
      <div className="features">
        <div className="row">
          <div className="col">temp min </div>
          <div className="col">wind speed </div>
          <div className="col">pressure </div>
        </div>
        <div className="row">
          <div className="col">temp max </div>
          <div className="col">wind degree </div>
          <div className="col">humidity </div>
        </div>
      </div>
    );
  }

  const { main, wind } = weatherData;

  const temperatureInCelcius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  };

  return (
    <div className="features d-flex flex-column justify-content-center">
      <h1 className="text-center  text-white title">Features</h1>
      <div className="row overflow-hidden ">
        <div className="col d-flex flex-column justify-content-center align-items-center m-5 rounded-5">
          <p className="text-capitalize fs-2">temp min</p>
          <p className="fs-2">{temperatureInCelcius(main.temp_min)} °C </p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center  m-5 rounded-5 ">
          <p className="text-capitalize fs-2">wind speed</p>
          <p className="fs-2">{wind.speed} m/s</p>
        </div>
      </div>
      <div className="row overflow-hidden ">
        <div className="col d-flex flex-column justify-content-center align-items-center m-5  rounded-5">
          <p className="text-capitalize fs-2">pressure</p>
          <p className="fs-2">{main.pressure} hPa</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center m-5  rounded-5">
          <p className="text-capitalize fs-2">humidity</p>
          <p className="fs-2">%{main.humidity}</p>
        </div>
      </div>
      <div className="row overflow-hidden ">
        <div className="col d-flex flex-column justify-content-center align-items-center m-5  rounded-5">
          <p className="text-capitalize fs-2">temp max</p>
          <p className="fs-2">{temperatureInCelcius(main.temp_max)} °C</p>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center m-5  rounded-5">
          <p className="text-capitalize fs-2">wind degree</p>
          <p className="fs-2">{wind.deg}</p>
        </div>
      </div>
    </div>
  );
};
