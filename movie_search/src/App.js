import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Popular } from "./pages/Popular";
import { UpComing } from "./pages/UpComing";
import { Result } from "./pages/Result";
import { Favorites } from "./pages/Favorites";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  return (
    <div className="bg-black">
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/result" element={<Result />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
