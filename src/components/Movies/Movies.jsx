import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [newMovieSearch, setNewMovieSearch] = useState('');
  const [movies, setMovies] = useState([]);

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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        onChange={e => setNewMovieSearch(e.target.value)}
        type="text"
        value={newMovieSearch}
      />
      <button onClick={handleMovieSearch}>Search</button>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
