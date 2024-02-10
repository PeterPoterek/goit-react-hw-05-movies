import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CastContainer,
  CastItem,
  CastImage,
  CastName,
  CharacterInfo,
} from './CastStyles';

const Cast = () => {
  const { movieId } = useParams();

  const [currentMovie] = useState(movieId);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWM4YjU4MjhiNGVjNGMwZjU5YzFkZTVlMmQ1ZTNiOCIsInN1YiI6IjY1YzNhMDVlMmZlMmZhMDE4NDJhODNlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9SAFWmxQkdTT5KUPdr_PSuh1d-FJ7WmxFeruZ9_Y5Q',
      },
    };

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${currentMovie}/credits?language=en-US`,
        options
      )
      .then(response => {
        setCastList(response.data.cast);
      })
      .catch(err => console.error(err));
  }, [currentMovie]);

  return (
    <>
      <CastContainer>
        {castList.map(castListItem => (
          <CastItem key={castListItem.id}>
            {castListItem.profile_path && (
              <CastImage
                src={`https://image.tmdb.org/t/p/w185${castListItem.profile_path}`}
                alt={castListItem.name}
              />
            )}

            <CastName>{castListItem.name}</CastName>
            <CharacterInfo>Character: {castListItem.character}</CharacterInfo>
          </CastItem>
        ))}
      </CastContainer>
    </>
  );
};

export default Cast;
