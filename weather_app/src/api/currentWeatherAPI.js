import axios from "axios";

const apiKey = "6402f21d66852d2ea498983e8c95260c";

export const currentWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Error while fetching weather data: ", error);
    throw error;
  }
};
