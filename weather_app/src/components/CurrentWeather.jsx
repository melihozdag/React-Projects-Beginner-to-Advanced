import React, { useEffect } from "react";
import "./CurrentWeather.css";
import { useSelector, useDispatch } from "react-redux";
import { setWeatherData } from "../redux/weatherSlice";
import thunderImage from "../images/thunderstorm.jpg";
import drizzleImage from "../images/drizzle.jpg";
import rainImage from "../images/rain.jpg";
import snowImage from "../images/snow.jpg";
import clearImage from "../images/clear.jpg";
import cloudImage from "../images/cloud.jpg";
import { currentWeatherData } from "../api/currentWeatherAPI";

export const CurrentWeather = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);

  const weatherImages = {
    Thunderstorm: thunderImage,
    Drizzle: drizzleImage,
    Rain: rainImage,
    Snow: snowImage,
    Clear: clearImage,
    Clouds: cloudImage,
  };

  useEffect(() => {
    // Sayfa açıldığında Istanbul verilerini yükle
    const fetchWeatherData = async (city) => {
      try {
        // Weather API'den verileri al ve Redux store'a gönder
        const data = await currentWeatherData(city);
        dispatch(setWeatherData(data));
      } catch (error) {
        console.error("Error while fetching weather data: ", error);
      }
    };

    fetchWeatherData("Istanbul");
  }, [dispatch]);

  const getWeatherImage = () => {
    if (weatherData) {
      const weather = weatherData.weather[0].main;
      return weatherImages[weather];
    }
  };

  const weatherImage = getWeatherImage();

  if (!weatherData) {
    return (
      <div>
        <div>
          <h1>Name</h1>
          <p>Date</p>
        </div>
        <div className="d-flex">
          <div>
            <h1>Temperature</h1>
            <p>Description</p>
          </div>
        </div>
      </div>
    );
  }

  const defaultWeatherData = {
    city: {
      name: "Istanbul",
      code: "IST",
    },
    dt: "Date",
    main: {
      temp: "Temperature",
    },
    weather: [
      {
        description: "Weather",
      },
    ],
  };

  const { name, sys, dt, main, weather } = weatherData || defaultWeatherData;

  const convertUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); // Unix zaman damgası milisaniye cinsinden olduğu için 1000 ile çarptık
    return date.toLocaleString(); // Tarihi yerel tarih ve saat biçimine dönüştür
  };

  const formattedDate = convertUnixTimestamp(dt);

  const convertKelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return Math.round(celsius);
  };

  const temperatureInCelsius = convertKelvinToCelsius(main.temp);

  return (
    <div
      className="current"
      style={{
        backgroundImage: `url(${weatherImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
      }}
    >
      <div className="">
        <div className="city_name_section p-5">
          <h1 className="text-white fw-bold city_name">
            {name}, {sys.country}
          </h1>
          <p className="fw-bold fs-4">{formattedDate}</p>
        </div>
        <div className="d-flex">
          <div className="container-fluid d-flex m-5 justify-content-center align-items-center position-absolute top-50
          tempreature_description
          rounded
          ">
            <h1 className="fw-bold temperature">{temperatureInCelsius}°C</h1>
            <p className="text-capitalize fw-bold ms-5 description">
              {weather[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
