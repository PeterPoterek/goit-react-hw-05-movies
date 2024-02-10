import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import {
  MoviesContainer,
  SearchInput,
  SearchButton,
  MoviesList,
  MovieItem,
  MovieLink,
} from './MoviesStyles';

const Movies = () => {
  const [newMovieSearch, setNewMovieSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleMovieSearch = async () => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            include_adult: false,
            language: 'en-US',
            page: 1,
            query: newMovieSearch,
          },
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM4YjU4MjhiNGVjNGMwZjU5YzFkZTVlMmQ1ZTNiOCIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9SAFWmxQkdTT5KUPdr_PSuh1d-FJ7WmxFeruZ9_Y5Q',
          },
        }
      );

      setMovies(response.data.results);

      navigate(`/movies?query=${newMovieSearch}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <MoviesContainer>
        <SearchInput
          onChange={e => setNewMovieSearch(e.target.value)}
          type="text"
          value={newMovieSearch}
        />
        <SearchButton onClick={handleMovieSearch}>Search</SearchButton>

        <MoviesList>
          {movies.map(movie => (
            <MovieItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`}>{movie.title}</MovieLink>
            </MovieItem>
          ))}
        </MoviesList>
      </MoviesContainer>
    </>
  );
};

export default Movies;
