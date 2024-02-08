import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar/Navbar.jsx';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner.jsx';
import NotFound from './NotFound/NotFound.jsx';

const Home = lazy(() => import('./Home/Home.jsx'));
const Movies = lazy(() => import('./Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
