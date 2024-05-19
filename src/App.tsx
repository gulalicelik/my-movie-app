import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from "./features/movies/MovieList"
import MovieDetails from "./features/movies/MovieDetail"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList /> } />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;