import { Route, Routes } from 'react-router-dom';

import Home from './Home/Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Movies from './Movies/Movies.jsx';
import MovieDetails from './MovieDetails/MovieDetails.jsx';
import Cast from './Cast/Cast.jsx';
import Reviews from './Reviews/Reviews.jsx';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};
