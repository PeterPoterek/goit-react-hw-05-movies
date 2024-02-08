import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner.jsx';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM4YjU4MjhiNGVjNGMwZjU5YzFkZTVlMmQ1ZTNiOCIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9SAFWmxQkdTT5KUPdr_PSuh1d-FJ7WmxFeruZ9_Y5Q',
            },
          }
        );

        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <LoadingSpinner />;
  }

  const calculateUserScorePercentage = movie => {
    const userScore = movie.vote_average;
    const maximumScore = 10;
    const userScorePercentage = (userScore / maximumScore) * 100;
    return Math.round(userScorePercentage);
  };

  console.log(movieDetails);

  return (
    <>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={`Poster for ${movieDetails.title}`}
      />
      <ul>
        {movieDetails.genres.map(genre => {
          return <li key={genre.id}>{genre.name}</li>;
        })}
      </ul>

      <div>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
      </div>
      <p>{calculateUserScorePercentage(movieDetails)}%</p>

      <ul>
        <li>
          <Link>Cast</Link>
        </li>
        <li>
          <Link>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;
