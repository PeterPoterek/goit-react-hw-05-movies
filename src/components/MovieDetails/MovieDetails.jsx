import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner.jsx';
import Cast from 'components/Cast/Cast.jsx';
import Reviews from 'components/Reviews/Reviews.jsx';

import {
  MovieDetailsContainer,
  MovieTitle,
  MoviePoster,
  GenreList,
  GenreItem,
  OverviewContainer,
  OverviewTitle,
  UserScore,
  TabTitle,
  TabList,
  TabItem,
  TabButton,
  BackButton,
} from './MovieDetailsStyles';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [selectedTab, setSelectedTab] = useState('');

  const navigate = useNavigate();

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
  const handleTabClick = tab => {
    setSelectedTab(tab);
    const newUrl = `/goit-react-hw-05-movies/movies/${movieId}/${tab}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const handleBackButtonClick = () => {
    navigate(`/movies/${movieId}/`);
    setSelectedTab('');
  };

  return (
    <MovieDetailsContainer>
      <BackButton onClick={handleBackButtonClick}>Back</BackButton>
      <MovieTitle>{movieDetails.title}</MovieTitle>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={`Poster for ${movieDetails.title}`}
      />
      <GenreList>
        {movieDetails.genres.map(genre => (
          <GenreItem key={genre.id}>{genre.name}</GenreItem>
        ))}
      </GenreList>

      <OverviewContainer>
        <OverviewTitle>Overview</OverviewTitle>
        <p>{movieDetails.overview}</p>
      </OverviewContainer>
      <UserScore>
        User Score: {calculateUserScorePercentage(movieDetails)}%
      </UserScore>

      <TabTitle>Additional Information</TabTitle>
      <TabList>
        <TabItem>
          <TabButton onClick={() => handleTabClick('cast')}>Cast</TabButton>
        </TabItem>
        <TabItem>
          <TabButton onClick={() => handleTabClick('reviews')}>
            Reviews
          </TabButton>
        </TabItem>
      </TabList>

      {selectedTab === 'cast' && <Cast />}
      {selectedTab === 'reviews' && <Reviews />}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
