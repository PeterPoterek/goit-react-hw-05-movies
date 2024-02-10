import { lazy, Suspense, useEffect, useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar/Navbar.jsx';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner.jsx';
import NotFound from './NotFound/NotFound.jsx';

const Home = lazy(() => import('./Home/Home.jsx'));
const Movies = lazy(() => import('./Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

export const TrendingListContext = createContext();

export const App = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/day?language=en-US',
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM4YjU4MjhiNGVjNGMwZjU5YzFkZTVlMmQ1ZTNiOCIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9SAFWmxQkdTT5KUPdr_PSuh1d-FJ7WmxFeruZ9_Y5Q',
            },
          }
        );

        setTrendingList(prevTrendingList => [
          ...prevTrendingList,
          ...response.data.results,
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TrendingListContext.Provider value={{ trendingList, setTrendingList }}>
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
      </TrendingListContext.Provider>
    </>
  );
};
