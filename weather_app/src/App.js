import "./App.css";
import { Search } from "./components/Search";
import { CurrentWeather } from "./components/CurrentWeather";
import { WeatherFeatures } from "./components/WeatherFeatures";

function App() {
  return (
    <div className="app">
      <Search className="search" />
      <div className="d-flex justify-content-between">
        <CurrentWeather className="current_weather" />
        <WeatherFeatures />
      </div>
    </div>
  );
}

export default App;
